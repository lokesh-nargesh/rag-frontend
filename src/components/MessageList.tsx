import React from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`message ${msg.sender === "user" ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
