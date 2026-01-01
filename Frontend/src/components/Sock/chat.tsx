import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Connect to socket server
    const newSocket = io("http://localhost:3000");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSocket(newSocket);

    // Listen for incoming messages
    newSocket.on("receive_message", (data: string) => {
      setMessages(prev => [...prev, data]);
    });

    // Cleanup on unmount
    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.emit("send_message", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Socket.IO Chat</h2>

      {/* Messages Display */}
      <div style={{
        border: "1px solid #ccc",
        height: "300px",
        overflowY: "scroll",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9"
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            {msg}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
