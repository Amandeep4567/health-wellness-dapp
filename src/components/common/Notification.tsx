// src/components/common/Notification.tsx

import React, { useEffect } from "react";
import "./Notification.css"; // Import corresponding CSS module

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // Duration in milliseconds
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`notification ${type}`}>
      <span className="notification-message">{message}</span>
      <button className="notification-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Notification;
