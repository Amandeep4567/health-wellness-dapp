// src/services/fitnessService.ts

import axios from "axios";
import { Activity, Reward, Goal, LeaderboardEntry } from "../types/fitness";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const getActivityData = async (): Promise<{
  activities: Activity[];
  rewards: Reward[];
  goal: Goal | null;
}> => {
  const response = await axios.get(`${API_URL}/fitness/data`, {
    withCredentials: true,
  });
  return response.data;
};

const setGoal = async (goal: Goal) => {
  await axios.post(`${API_URL}/fitness/goal`, goal, { withCredentials: true });
};

const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  const response = await axios.get(`${API_URL}/fitness/leaderboard`, {
    withCredentials: true,
  });
  return response.data;
};

export default {
  getActivityData,
  setGoal,
  fetchLeaderboard,
};
