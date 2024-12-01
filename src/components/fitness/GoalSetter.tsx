// src/components/fitness/GoalSetter.tsx

import React, { useState, FormEvent } from "react";
import { useFitnessData } from "../../hooks/useFitnessData";
import InputField from "../common/InputField";
import Button from "../common/Button";

interface GoalSetterProps {}

const GoalSetter: React.FC<GoalSetterProps> = () => {
  const { goal, setGoal } = useFitnessData();
  const [stepsGoal, setStepsGoal] = useState(goal ? goal.steps.toString() : "");

  const [errors, setErrors] = useState<{ stepsGoal?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const steps = parseInt(stepsGoal, 10);

    if (isNaN(steps) || steps <= 0) {
      setErrors({ stepsGoal: "Please enter a valid number greater than 0." });
      return;
    }

    setGoal({ steps });
    setErrors({});
    // Optionally, show a success message or notification
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Your Daily Goal</h2>
      <InputField
        label="Steps Goal"
        type="number"
        value={stepsGoal}
        onChange={(e) => setStepsGoal(e.target.value)}
        error={errors.stepsGoal}
        required
      />
      <Button label="Set Goal" type="submit" />
      {goal && (
        <p>
          Current Goal: <strong>{goal.steps}</strong> steps per day.
        </p>
      )}
    </form>
  );
};

export default GoalSetter;
