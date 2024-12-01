// src/components/healthData/DataViewer.tsx

import React from "react";
import { HealthDataRecord } from "../../types/healthData.ts";
import Button from "../common/Button";

interface DataViewerProps {
  record: HealthDataRecord;
  onClose: () => void;
}

const DataViewer: React.FC<DataViewerProps> = ({ record, onClose }) => {
  const handleDownload = () => {
    // Implement file download logic
    // For example, generate a secure URL and initiate download
  };

  return (
    <div>
      <h2>Health Data Details</h2>
      <p>
        <strong>Description:</strong> {record.description}
      </p>
      <p>
        <strong>Uploaded On:</strong>{" "}
        {new Date(record.uploadedAt).toLocaleDateString()}
      </p>
      <Button label="Download" onClick={handleDownload} />
      <Button label="Close" onClick={onClose} />
    </div>
  );
};

export default DataViewer;
