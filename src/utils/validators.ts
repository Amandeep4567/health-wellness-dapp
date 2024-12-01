// src/utils/validators.ts

export const validateEmail = (email: string): boolean => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

export const validatePassword = (password: string): boolean => {
  // Example: Password must be at least 6 characters
  return password.length >= 6;
};

export const validateDate = (date: string): boolean => {
  return !isNaN(Date.parse(date));
};

export const validateTime = (time: string): boolean => {
  const regex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
};

// Add more validators as needed
