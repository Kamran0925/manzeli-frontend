import React, { createContext, useState, useContext, ReactNode } from "react";
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validationHelpers";

export interface FieldState {
  title: string;
  value: string;
  error: boolean;
  errorMessage: string;
  disabled: boolean;
  placeholder: string;
}

export interface FormState {
  username: FieldState;
  email: FieldState;
  password: FieldState;
  confirmPassword: FieldState;
}

interface FormContextType {
  formState: FormState;
  validateField: (fieldName: keyof FormState, value: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>({
    username: {
      title: "Your fullname*",
      value: "",
      error: false,
      errorMessage: "",
      disabled: false,
      placeholder: "Enter name",
    },
    email: {
      title: "Email address*",
      value: "",
      error: false,
      errorMessage: "",
      disabled: false,
      placeholder: "Enter email address",
    },
    password: {
      title: "Create password*",
      value: "",
      error: false,
      errorMessage: "",
      disabled: false,
      placeholder: "Your password",
    },
    confirmPassword: {
      title: "Confirm new password",
      value: "",
      error: false,
      errorMessage: "",
      disabled: false,
      placeholder: "Confirm new password",
    },
  });

  const validateField = (fieldName: keyof FormState, value: string) => {
    let error = false;
    let errorMessage = "";

    switch (fieldName) {
      case "username":
        const usernameValidation = validateUsername(value);
        error = usernameValidation.error;
        errorMessage = usernameValidation.message;
        break;
      case "email":
        const emailValidation = validateEmail(value);
        error = emailValidation.error;
        errorMessage = emailValidation.message;
        break;
      case "password":
        const passwordValidation = validatePassword(value);
        error = passwordValidation.error;
        errorMessage = passwordValidation.message;
        break;
      case "confirmPassword":
        const confirmPasswordValidation = validateConfirmPassword(
          formState.password.value,
          value,
        );
        error = confirmPasswordValidation.error;
        errorMessage = confirmPasswordValidation.message;
        break;
    }

    setFormState(prevState => ({
      ...prevState,
      [fieldName]: {
        value,
        error,
        errorMessage,
      },
    }));
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
