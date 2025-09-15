import React, { useState } from "react";

const InputBox: React.FC<{ onSend: (text: string) => void }> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask me about the news..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default InputBox;
