import React, { createContext, ReactNode, useEffect } from "react";
import { useFormContext } from "./FormContext";
import { useState } from "react";
import { clientTypes } from "../components/shared/AccountTypes/AccountTypes";
import { BillingCycles } from "../components/registration/Plans/Plans";
import {
  clientLogin,
  clientRegisteration,
  LoginData,
  RegisterationData,
} from "../api/authApi";
import apiClient from "../api/apiClient";

interface AuthContextType {
  register: () => Promise<void>;
  login: (data: LoginData) => any;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { formState } = useFormContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setTokens({ access: storedAccessToken, refresh: "" });
      setIsAuthenticated(true);
      apiClient.defaults.headers.Authorization = `Bearer ${storedAccessToken}`;
    }
  }, []);

  useEffect(() => {
    if (tokens) {
      if (tokens.access) {
        localStorage.setItem("accessToken", tokens.access);
        apiClient.defaults.headers.Authorization = `Bearer ${tokens.access}`;
      } else {
        delete apiClient.defaults.headers.Authorization;
      }
    }
  }, [tokens]);

  useEffect(() => {
    setIsLoading(false);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ register, login, isAuthenticated, isLoading }}
    >
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
