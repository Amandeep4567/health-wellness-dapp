// src/components/mentalHealth/ChatMessage.tsx

import React from "react";
import { Message } from "../../types/mentalHealth";
import { useAuth } from "../../hooks/useAuth";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { user } = useAuth();
  const isOwnMessage = message.senderId === user?.id;

  return (
    <div className={`chat-message ${isOwnMessage ? "own-message" : ""}`}>
      <div className="message-content">
        <p>{message.content}</p>
        <span className="message-time">
          {new Date(message.sentAt).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
