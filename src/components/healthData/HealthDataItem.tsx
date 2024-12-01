// src/components/healthData/HealthDataItem.tsx

import React, { useState } from "react";
import { HealthDataRecord } from "../../types/healthData.ts";
import Button from "../common/Button";
import DataViewer from "./DataViewer";
import Modal from "../common/Modal";
import ShareAccessForm from "./ShareAccessForm";

interface HealthDataItemProps {
  record: HealthDataRecord;
}

const HealthDataItem: React.FC<HealthDataItemProps> = ({ record }) => {
  const [isViewerOpen, setViewerOpen] = useState(false);
  const [isShareFormOpen, setShareFormOpen] = useState(false);

  const handleView = () => {
    setViewerOpen(true);
  };

  const handleShare = () => {
    setShareFormOpen(true);
  };

  return (
    <li>
      <p>
        <strong>{record.description}</strong> -{" "}
        {new Date(record.uploadedAt).toLocaleDateString()}
      </p>
      <Button label="View" onClick={handleView} />
      <Button label="Share" onClick={handleShare} />

      <Modal
        isOpen={isViewerOpen}
        onClose={() => setViewerOpen(false)}
        title="View Health Data"
      >
        <DataViewer record={record} onClose={() => setViewerOpen(false)} />
      </Modal>

      <Modal
        isOpen={isShareFormOpen}
        onClose={() => setShareFormOpen(false)}
        title="Share Health Data"
      >
        <ShareAccessForm
          record={record}
          onClose={() => setShareFormOpen(false)}
        />
      </Modal>
    </li>
  );
};

export default HealthDataItem;
