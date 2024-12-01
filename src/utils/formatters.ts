// src/utils/formatters.ts

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return `${formatDate(dateString)} ${formatTime(dateString)}`;
};

// Add more formatter functions as needed
