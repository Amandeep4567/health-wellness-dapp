// src/utils/constants.ts

export const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";
export const SOCKET_URL =
  process.env.REACT_APP_SOCKET_URL || "http://localhost:5000";

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  // Add more action types as needed
};

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  HEALTH_DATA: "/health-data",
  FITNESS: "/fitness",
  MENTAL_HEALTH: "/mental-health",
  PROFILE: "/profile",
};

// Add more constants as needed
