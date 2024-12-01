// src/components/mentalHealth/CounselorList.tsx

import React, { useEffect } from "react";
import { useMentalHealth } from "../../hooks/useMentalHealth";
import { Counselor } from "../../types/mentalHealth";

interface CounselorListProps {
  onSelectCounselor: (counselorId: string) => void;
}

const CounselorList: React.FC<CounselorListProps> = ({ onSelectCounselor }) => {
  const { counselors, fetchCounselors } = useMentalHealth();

  useEffect(() => {
    fetchCounselors();
  }, [fetchCounselors]);

  return (
    <div>
      <h2>Available Counselors</h2>
      {counselors.length === 0 ? (
        <p>No counselors are currently available.</p>
      ) : (
        <ul>
          {counselors.map((counselor: Counselor) => (
            <li key={counselor.id}>
              <strong>{counselor.name}</strong> - {counselor.specialization}
              <br />
              Availability: {counselor.availability}
              <br />
              <button onClick={() => onSelectCounselor(counselor.id)}>
                Chat Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CounselorList;
