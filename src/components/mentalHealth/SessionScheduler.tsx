// src/components/mentalHealth/SessionScheduler.tsx

import React, { useState, FormEvent } from "react";
import { useMentalHealth } from "../../hooks/useMentalHealth";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { Counselor } from "../../types/mentalHealth";

interface SessionSchedulerProps {
  counselor: Counselor;
  onClose: () => void;
}

const SessionScheduler: React.FC<SessionSchedulerProps> = ({
  counselor,
  onClose,
}) => {
  const { scheduleSession } = useMentalHealth();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<{ date?: string; time?: string }>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors: { date?: string; time?: string } = {};

    if (!date) {
      validationErrors.date = "Please select a date.";
    }

    if (!time) {
      validationErrors.time = "Please select a time.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await scheduleSession(counselor.id, `${date}T${time}`);
        onClose();
      } catch (error) {
        console.error("Failed to schedule session:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule a Session with {counselor.name}</h2>
      <InputField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        error={errors.date}
        required
      />
      <InputField
        label="Time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        error={errors.time}
        required
      />
      <Button label="Schedule" type="submit" />
      <Button label="Cancel" onClick={onClose} />
    </form>
  );
};

export default SessionScheduler;
