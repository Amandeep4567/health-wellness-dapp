// src/services/healthDataService.ts

import axios from "axios";
import { HealthDataRecord } from "../types/healthData.ts";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getHealthData = async (): Promise<HealthDataRecord[]> => {
  const response = await axios.get(`${API_URL}/health-data`, {
    withCredentials: true,
  });
  return response.data;
};

const uploadHealthData = async (data: { file: File; description: string }) => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("description", data.description);

  await axios.post(`${API_URL}/health-data/upload`, formData, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const shareHealthData = async (recordId: string, recipientEmail: string) => {
  await axios.post(
    `${API_URL}/health-data/share`,
    { recordId, recipientEmail },
    { withCredentials: true }
  );
};

export default {
  getHealthData,
  uploadHealthData,
  shareHealthData,
};
