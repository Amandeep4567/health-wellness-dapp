// src/components/common/InputField.tsx

import React from "react";
import "./InputField.css"; // Import corresponding CSS module

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => {
  return (
    <div className="input-field">
      <label className="input-label">
        {label}
        <input className={`input ${error ? "input-error" : ""}`} {...props} />
      </label>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
