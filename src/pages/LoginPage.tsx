// src/pages/LoginPage.tsx

import React from "react";
import AuthWrapper from "../components/auth/AuthWrapper";
import LoginForm from "../components/auth/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
