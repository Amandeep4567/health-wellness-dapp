// src/components/auth/LoginForm.tsx

import React, { useState, FormEvent } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useAuth } from "../../hooks/useAuth";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Input validation
    const validationErrors: { email?: string; password?: string } = {};
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await login({ email, password });
        // Redirect or update UI upon successful login
      } catch (error) {
        setErrors({ general: "Invalid email or password" });
      }
    }
  };

  const validateEmail = (email: string) => {
    // Simple regex for email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {errors.general && <p className="error">{errors.general}</p>}
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
      />
      <Button label="Login" type="submit" />
    </form>
  );
};

export default LoginForm;
