// src/pages/RegisterPage.tsx

import React from "react";
import AuthWrapper from "../components/auth/AuthWrapper";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
};

export default RegisterPage;
