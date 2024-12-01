// src/hooks/useFitnessData.tsx

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Activity, Reward, Goal } from "../types/fitness";
import fitnessService from "../services/fitnessService";

interface FitnessDataContextType {
  activityData: Activity[];
  rewards: Reward[];
  goal: Goal | null;
  setGoal: (goal: Goal) => void;
  fetchActivityData: () => void;
}

const FitnessDataContext = createContext<FitnessDataContextType>(
  {} as FitnessDataContextType
);

export const FitnessDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activityData, setActivityData] = useState<Activity[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [goal, setGoalState] = useState<Goal | null>(null);

  const fetchActivityData = useCallback(async () => {
    try {
      const data = await fitnessService.getActivityData();
      setActivityData(data.activities);
      setRewards(data.rewards);
      setGoalState(data.goal);
    } catch (error) {
      console.error("Failed to fetch fitness data:", error);
      // Handle error
    }
  }, []);

  const setGoal = (newGoal: Goal) => {
    setGoalState(newGoal);
    // Optionally, send the new goal to the backend
    fitnessService.setGoal(newGoal);
  };

  useEffect(() => {
    fetchActivityData();
  }, [fetchActivityData]);

  return (
    <FitnessDataContext.Provider
      value={{ activityData, rewards, goal, setGoal, fetchActivityData }}
    >
      {children}
    </FitnessDataContext.Provider>
  );
};

export const useFitnessData = () => {
  return useContext(FitnessDataContext);
};
