// src/components/common/Button.tsx

import React from "react";
import "./Button.css"; // Import corresponding CSS module

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`button ${variant}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
