import React, { createContext, ReactNode, useState } from "react";
import {
  clientLogin,
  clientRegisteration,
  LoginData,
  RegisterationData,
} from "../api/authApi";

interface AuthContextType {
  register: (data: RegisterationData) => Promise<void>;
  login: (data: LoginData) => any;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokens, setTokens] = useState<{
    access: string;
    refresh: string;
  } | null>(null);

  const register = async (data: RegisterationData) => {
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
