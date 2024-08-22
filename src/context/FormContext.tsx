import React, { createContext, useState, useContext, ReactNode } from "react";
import { validate } from "../utils/validationHelpers";
import {
  FormState,
  RegistrationFields,
} from "../components/shared/RegistrationFields/RegistrationFields";

interface FormContextType {
  formState: FormState;
  validateField: (
    type: string,
    fieldName: string,
    value: any,
    password?: string,
  ) => void;
  nextStep: () => void;
  previousStep: () => void;
  setProfilePicture: (blob: Blob | "") => void;
}
const inputFieldTypes = ["text", "email", "password", "checkbox", "select"];

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>(RegistrationFields);

  const validateField = (
    type: string,
    name: string,
    value: string,
    passwordValue?: string,
  ) => {
    let errorMessage = "";

    if (inputFieldTypes.includes(type)) {
      const validation = validate(type, value, passwordValue);
      errorMessage = validation.errorMessage;
    } else {
      errorMessage = "";
    }

    setFormState(prevState => {
      if (type === "checkbox") {
        return {
          ...prevState,
          [name]: value,
        };
      } else {
        return {
          ...prevState,
          [name]: {
            type,
            value,
            errorMessage,
          },
        };
      }
    });
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
