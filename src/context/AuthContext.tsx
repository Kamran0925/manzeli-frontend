import React, { createContext, ReactNode } from "react";
import { clientRegisteration, RegisterationData } from "../api/authApi";
import { useFormContext } from "./FormContext";
import { clientTypes } from "../components/shared/AccountTypes/AccountTypes";
import { BillingCycles } from "../components/registration/Plans/Plans";
import { createFormData } from "../utils/inputFIeldHelper";

interface AuthContextType {
  register: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { formState } = useFormContext();

  const register = async () => {
    const data: RegisterationData = {
      client_name: formState.username.value,
      client_type: clientTypes[formState.accountType],
      email: formState.email.value,
      telephone: formState.phone.value,
      street: formState.street.value,
      city: formState.city.value,
      country: "AE",
      logo: formState.profilePicture,
      product: 1,
      billing_cycle: BillingCycles["monthly"],
      billing_interval: 1,
      contact_name: formState.username.value,
      username: formState.email.value,
      password: formState.password.value,
      password_confirmation: formState.confirmPassword.value,
    };
    const formData = createFormData(data);
    return clientRegisteration(formData);
  };

  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
