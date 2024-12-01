// src/utils/helpers.ts

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const generateUniqueId = (): string => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

// Add more helper functions as needed
