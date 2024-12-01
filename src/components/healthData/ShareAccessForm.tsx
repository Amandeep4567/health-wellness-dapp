// src/components/healthData/ShareAccessForm.tsx

import React, { useState, FormEvent } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { useHealthData } from "../../hooks/useHealthData";
import { HealthDataRecord } from "../../types/healthData.ts";

interface ShareAccessFormProps {
  record: HealthDataRecord;
  onClose: () => void;
}

const ShareAccessForm: React.FC<ShareAccessFormProps> = ({
  record,
  onClose,
}) => {
  const { shareHealthData } = useHealthData();
  const [recipientEmail, setRecipientEmail] = useState("");
  const [errors, setErrors] = useState<{
    recipientEmail?: string;
    general?: string;
  }>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors: { recipientEmail?: string } = {};

    if (!recipientEmail) {
      validationErrors.recipientEmail = "Please enter an email address.";
    } else if (!validateEmail(recipientEmail)) {
      validationErrors.recipientEmail = "Please enter a valid email address.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await shareHealthData(record.id, recipientEmail);
        // Provide feedback to the user
        onClose();
      } catch (error) {
        console.error("Failed to share health data:", error);
        setErrors({
          general: "Failed to share health data. Please try again later.",
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
      <h2>Share Health Data</h2>
      {errors.general && <p className="error">{errors.general}</p>}
      <InputField
        label="Recipient Email"
        type="email"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
        error={errors.recipientEmail}
        required
      />
      <Button label="Share" type="submit" />
      <Button label="Cancel" onClick={onClose} />
    </form>
  );
};

export default ShareAccessForm;
