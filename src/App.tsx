import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>📰 Voosh RAG Chatbot</h1>
      <ChatWindow />
    </div>
  );
};

export default App;
