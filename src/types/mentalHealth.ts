// src/types/mentalHealth.ts

export interface Message {
  id: string;
  senderId: string;
  content: string;
  sentAt: string; // ISO date string
}

export interface Counselor {
  id: string;
  name: string;
  specialization: string;
  availability: string;
}
