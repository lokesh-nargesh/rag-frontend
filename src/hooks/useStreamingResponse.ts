import { useState } from "react";

export function useStreamingResponse() {
  const [response, setResponse] = useState("");

  const simulateStream = (text: string) => {
    let index = 0;
    setResponse("");
    const interval = setInterval(() => {
      setResponse((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 30);
  };

  return { response, simulateStream };
}
