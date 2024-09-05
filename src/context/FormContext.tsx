import React, { createContext, useState, useContext, ReactNode } from "react";
import { displayError, validate } from "../utils/validationHelpers";
import {
  FieldState,
  FormState,
  RegistrationFields,
} from "../components/shared/RegistrationFields/RegistrationFields";

interface FormContextType {
  formState: FormState;
  validateField: (type: string, fieldName: string, value: any) => boolean;
  nextStep: () => void;
  previousStep: () => void;
  setProfilePicture: (blob: Blob | "") => void;
}
const inputFieldTypes = [
  "text",
  "email",
  "password",
  "checkbox",
  "select",
  "phone",
];
const contactFields = [
  "username",
  "password",
  "confirmPassword",
  "phone",
  "address",
  "street",
  "city",
  "identity",
];

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>(RegistrationFields);

  const validateField = (type: string, name: string, value: string) => {
    let errorMessage = "";

    if (inputFieldTypes.includes(type) && name === "username") {
      const validation = validate(name, value);
      errorMessage = validation.errorMessage;
    } else if (inputFieldTypes.includes(type)) {
      const validation = validate(type, value);
      errorMessage = validation.errorMessage;
    } else {
      errorMessage = "";
    }

    if (contactFields.includes(name) && errorMessage !== "") {
      errorMessage = displayError(name, errorMessage);
    }

    let newFieldData: FieldState = {
      title: name,
      type: type,
      value: value,
      errorMessage: errorMessage,
      disabled: false,
      step: formState.step,
    };

    setFormState(prevState => {
      if (type === "checkbox") {
        return {
          ...prevState,
          [name]: value,
        };
      } else {
        return {
          ...prevState,
          [name]: newFieldData,
        };
      }
    });

    return !errorMessage ? true : false;
  };

  const nextStep = () => {
    setFormState(prevState => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const previousStep = () => {
    setFormState(prevState => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  const setProfilePicture = (blob: Blob | "") => {
    setFormState(prevState => ({
      ...prevState,
      profilePicture: blob,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        validateField,
        nextStep,
        previousStep,
        setProfilePicture,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
