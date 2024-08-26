import React, { createContext, useState, useContext, ReactNode } from "react";
import { validate, validateConfirmPassword } from "../utils/validationHelpers";
import {
  FieldState,
  FormState,
  RegistrationFields,
} from "../components/shared/RegistrationFields/RegistrationFields";

interface FormContextType {
  formState: FormState;
  validateField: (type: string, fieldName: string, value: any) => void;
  validatePassword: (type: string, fieldName: string, value: any) => void;
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

  const validateField = (type: string, name: string, value: string) => {
    let errorMessage = "";
    let confirmPassword = formState.confirmPassword.value;

    if (inputFieldTypes.includes(type)) {
      const validation = validate(type, value, confirmPassword);
      errorMessage = validation.errorMessage;
    } else {
      errorMessage = "";
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
  };

  const validatePassword = (type: string, name: string, value: string) => {
    let errorMessage = "";
    let password = formState.password.value;

    const validation = validateConfirmPassword(type, value, password);
    errorMessage = validation.errorMessage;

    let newConfirmPassword: FieldState = {
      title: name,
      type: type,
      value: value,
      errorMessage: errorMessage,
      disabled: false,
      step: formState.step,
    };

    setFormState(prevState => {
      return {
        ...prevState,
        [name]: newConfirmPassword,
      };
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
        validatePassword,
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
