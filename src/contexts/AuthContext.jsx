// src/contexts/AuthContext.tsx

import React, { createContext, useState } from 'react';
import authService from '../services/authService';

interface AuthContextType {
  user: any; // Define a proper User type based on your data
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (credentials: { email: string; password: string }) => {
    const response = await authService.login(credentials);
    setUser(response.user);
    // Store authentication token if necessary
  };

  const register = async (data: { name: string; email: string; password: string }) => {
    const response = await authService.register(data);
    setUser(response.user);
    // Store authentication token if necessary
  };

  const resetPassword = async (email: string) => {
    await authService.resetPassword(email);
  };

  const logout = () => {
    setUser(null);
    // Remove authentication token if necessary
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
