// src/types/fitness.ts

export interface Activity {
  id: string;
  date: string; // ISO date string
  steps: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  achievedAt: string; // ISO date string
}

export interface Goal {
  steps: number;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  totalSteps: number;
}
