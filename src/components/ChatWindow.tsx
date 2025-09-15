import React, { useState } from "react";
import MessageList from "./MessageList";
import InputBox from "./InputBox";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user" as "user", text }];
    setMessages(newMessages);

    try {
      // Call backend API
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { sender: "bot" as "bot", text: data.answer || "No answer found." },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot" as "bot", text: "⚠️ Error connecting to backend." },
      ]);
    }
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <InputBox onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
