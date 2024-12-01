// src/components/auth/ForgotPasswordForm.tsx

import React, { useState, FormEvent } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useAuth } from "../../hooks/useAuth";

const ForgotPasswordForm: React.FC = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{ email?: string; general?: string }>(
    {}
  );
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Input validation
    const validationErrors: { email?: string } = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    setErrors(validationErrors);
    setSuccessMessage(null);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await resetPassword(email);
        setSuccessMessage("A password reset link has been sent to your email.");
      } catch (error) {
        setErrors({
          general: "Failed to send reset link. Please try again later.",
        });
      }
    }
  };

  const validateEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      {errors.general && <p className="error">{errors.general}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      <Button label="Reset Password" type="submit" />
    </form>
  );
};

export default ForgotPasswordForm;
