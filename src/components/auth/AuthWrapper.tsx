// src/components/auth/AuthWrapper.tsx

import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
