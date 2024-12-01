// src/components/mentalHealth/SupportChat.tsx

import React, { useEffect, useRef } from "react";
import { useMentalHealth } from "../../hooks/useMentalHealth";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface SupportChatProps {
  counselorId: string;
}

const SupportChat: React.FC<SupportChatProps> = ({ counselorId }) => {
  const {
    messages,
    sendMessage,
    connectToChat,
    disconnectFromChat,
    fetchMessages,
  } = useMentalHealth();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    connectToChat(counselorId);
    fetchMessages(counselorId);

    return () => {
      disconnectFromChat();
    };
  }, [connectToChat, disconnectFromChat, fetchMessages, counselorId]);

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    sendMessage(content);
  };

  return (
    <div className="support-chat">
      <div className="messages">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default SupportChat;
