import React, { createContext, ReactNode, useState } from "react";
import {
  clientLogin,
  clientRegisteration,
  LoginData,
  RegisterationData,
} from "../api/authApi";
import { useFormContext } from "./FormContext";
import { clientTypes } from "../components/shared/AccountTypes/AccountTypes";
import { BillingCycles } from "../components/registration/Plans/Plans";

interface AuthContextType {
  register: () => Promise<void>;
  login: (data: LoginData) => any;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { formState } = useFormContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokens, setTokens] = useState<{
    access: string;
    refresh: string;
  } | null>(null);

  const register = async () => {
    const data: RegisterationData = {
      client_name: formState.username.value,
      client_type: clientTypes[formState.accountType],
      email: formState.email.value,
      telephone: formState.phone.value,
      street: formState.street.value,
      city: formState.city.value,
      country: "AE",
      product: 1,
      billing_cycle: BillingCycles["monthly"],
      billing_interval: 1,
      contact_name: formState.username.value,
      username: formState.email.value,
      password: formState.password.value,
      password_confirmation: formState.confirmPassword.value,
    };
    return clientRegisteration(data);
  };

  const login = async (data: LoginData) => {
    const response = await clientLogin(data);
    if (response.access && response.refresh) {
      setTokens({ access: response.access, refresh: response.refresh });
      setIsAuthenticated(true);
    }
    return response;
  };

  return (
    <AuthContext.Provider value={{ register, login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
