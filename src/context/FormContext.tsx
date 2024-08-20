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
}

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

    switch (type) {
      case "text":
      case "email":
      case "password":
        const validation = validate(type, value, passwordValue);
        errorMessage = validation.errorMessage;
        break;
      case "checkbox":
        break;
      default:
        errorMessage = "Unknown field type";
    }

    if (type === "checkbox") {
      setFormState(prevState => ({
        ...prevState,
        [name]: true,
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        [name]: {
          value,
          errorMessage,
        },
      }));
    }
  };

  return (
    <FormContext.Provider value={{ formState, validateField }}>
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
