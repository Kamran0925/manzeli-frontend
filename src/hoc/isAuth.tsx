import React, { ReactNode } from "react";
import Loader from "../components/shared/Loader/Loader";
import { useAuth } from "../context/AuthContext";

interface IsAuthProps {
  children: ReactNode;
}

const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default IsAuth;
