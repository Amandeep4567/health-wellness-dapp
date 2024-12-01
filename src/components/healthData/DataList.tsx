// src/components/healthData/DataList.tsx

import React, { useEffect } from "react";
import { useHealthData } from "../../hooks/useHealthData";
import HealthDataItem from "./HealthDataItem";

interface DataListProps {}

const DataList: React.FC<DataListProps> = () => {
  const { healthDataRecords, fetchHealthData } = useHealthData();

  useEffect(() => {
    fetchHealthData();
  }, [fetchHealthData]);

  return (
    <div>
      <h2>Your Health Records</h2>
      {healthDataRecords.length === 0 ? (
        <p>No health records found.</p>
      ) : (
        <ul>
          {healthDataRecords.map((record) => (
            <HealthDataItem key={record.id} record={record} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataList;
