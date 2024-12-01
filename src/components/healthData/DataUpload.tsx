// src/components/healthData/DataUpload.tsx

import React, { useState, FormEvent } from "react";
import { useHealthData } from "../../hooks/useHealthData";
import InputField from "../common/InputField";
import Button from "../common/Button";

interface DataUploadProps {}

const DataUpload: React.FC<DataUploadProps> = () => {
  const { uploadHealthData } = useHealthData();
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{ file?: string; description?: string }>(
    {}
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors: { file?: string; description?: string } = {};

    if (!file) {
      validationErrors.file = "Please select a file to upload.";
    }

    if (!description) {
      validationErrors.description = "Please provide a description.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && file) {
      try {
        await uploadHealthData({ file, description });
        // Clear the form or provide feedback to the user
        setFile(null);
        setDescription("");
      } catch (error) {
        console.error("Failed to upload health data:", error);
        // Handle error (e.g., show notification)
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Health Data</h2>
      <InputField
        label="File"
        type="file"
        onChange={handleFileChange}
        error={errors.file}
        required
      />
      <InputField
        label="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        error={errors.description}
        required
      />
      <Button label="Upload" type="submit" />
    </form>
  );
};

export default DataUpload;
