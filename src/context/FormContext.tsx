import React, { createContext, useState, useContext, ReactNode } from "react";
import { displayError, validate } from "../utils/validationHelpers";
import {
  FieldState,
  FormState,
  RegistrationFields,
} from "../components/shared/RegistrationFields/RegistrationFields";

export enum AccountType {
  PropertyManagementFirm = "Property Management Firm",
  IndividualPropertyOwner = "Individual Property Owner",
}

interface FormContextType {
  formState: FormState;
  validateField: (
    type: string,
    fieldName: keyof FormState,
    value: any,
  ) => boolean;
  nextStep: () => void;
  previousStep: () => void;
  setAccountType: (accountType: AccountType) => void;
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
  "company",
  "website",
];

const fieldNames = ["username", "address", "street", "city", "company"];

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>(RegistrationFields);

  const validateField = (
    type: string,
    name: keyof FormState,
    value: string,
  ) => {
    let errorMessage = "";

    if (inputFieldTypes.includes(type) && fieldNames.includes(name)) {
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

    const fieldState = formState[name] as FieldState;
    let newFieldData: FieldState = {
      title: fieldState.title,
      type: type,
      value: value,
      errorMessage: errorMessage,
      disabled: false,
      individualFlowStep: fieldState.individualFlowStep,
      companyFlowStep: fieldState.companyFlowStep,
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

  const setAccountType = (accountType: AccountType) => {
    setFormState(prevState => ({
      ...prevState,
      accountType: accountType,
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
        setAccountType,
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
