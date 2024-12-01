// src/hooks/useHealthData.tsx

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { HealthDataRecord } from "../types/healthData.ts";
import healthDataService from "../services/healthDataService";

interface HealthDataContextType {
  healthDataRecords: HealthDataRecord[];
  fetchHealthData: () => void;
  uploadHealthData: (data: {
    file: File;
    description: string;
  }) => Promise<void>;
  shareHealthData: (recordId: string, recipientEmail: string) => Promise<void>;
}

const HealthDataContext = createContext<HealthDataContextType>(
  {} as HealthDataContextType
);

export const HealthDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [healthDataRecords, setHealthDataRecords] = useState<
    HealthDataRecord[]
  >([]);

  const fetchHealthData = useCallback(async () => {
    try {
      const data = await healthDataService.getHealthData();
      setHealthDataRecords(data);
    } catch (error) {
      console.error("Failed to fetch health data:", error);
      // Handle error (e.g., show notification)
    }
  }, []);

  const uploadHealthData = async (data: {
    file: File;
    description: string;
  }) => {
    try {
      await healthDataService.uploadHealthData(data);
      await fetchHealthData(); // Refresh the list
    } catch (error) {
      console.error("Failed to upload health data:", error);
      throw error;
    }
  };

  const shareHealthData = async (recordId: string, recipientEmail: string) => {
    try {
      await healthDataService.shareHealthData(recordId, recipientEmail);
    } catch (error) {
      console.error("Failed to share health data:", error);
      throw error;
    }
  };

  return (
    <HealthDataContext.Provider
      value={{
        healthDataRecords,
        fetchHealthData,
        uploadHealthData,
        shareHealthData,
      }}
    >
      {children}
    </HealthDataContext.Provider>
  );
};

export const useHealthData = () => {
  return useContext(HealthDataContext);
};
