// src/components/auth/RegisterForm.tsx

import React, { useState, FormEvent } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useAuth } from "../../hooks/useAuth";

const RegisterForm: React.FC = () => {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Input validation
    const validationErrors: {
      name?: string;
      email?: string;
      password?: string;
    } = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await register({ name, email, password });
        // Redirect or update UI upon successful registration
      } catch (error) {
        setErrors({ general: "Registration failed. Please try again." });
      }
    }
  };

  const validateEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {errors.general && <p className="error">{errors.general}</p>}
      <InputField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        required
      />
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
      <Button label="Register" type="submit" />
    </form>
  );
};

export default RegisterForm;
