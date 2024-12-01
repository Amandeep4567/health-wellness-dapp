// src/services/mentalHealthService.ts

import axios from "axios";
import { Counselor, Message } from "../types/mentalHealth";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getCounselors = async (): Promise<Counselor[]> => {
  const response = await axios.get(`${API_URL}/mental-health/counselors`, {
    withCredentials: true,
  });
  return response.data;
};

const getMessages = async (roomId: string): Promise<Message[]> => {
  const response = await axios.get(
    `${API_URL}/mental-health/messages/${roomId}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const scheduleSession = async (counselorId: string, datetime: string) => {
  await axios.post(
    `${API_URL}/mental-health/schedule`,
    { counselorId, datetime },
    { withCredentials: true }
  );
};

export default {
  getCounselors,
  getMessages,
  scheduleSession,
};
