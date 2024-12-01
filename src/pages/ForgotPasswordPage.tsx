// src/pages/ForgotPasswordPage.tsx

import React from "react";
import AuthWrapper from "../components/auth/AuthWrapper";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthWrapper>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
};

export default ForgotPasswordPage;
