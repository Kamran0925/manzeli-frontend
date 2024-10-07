import React, { createContext, ReactNode } from "react";
import { clientRegisteration, RegisterationData } from "../api/authApi";

interface AuthContextType {
  register: (data: RegisterationData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const register = async (data: RegisterationData) => {
    return clientRegisteration(data);
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
