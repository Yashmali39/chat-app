import { useState } from "react";

function ChatInput({ socket, username }) {

  const [message, setMessage] = useState("");

  const sendMessage = () => {

    if (!message.trim()) return;

    socket.emit("send_message", {
      sender: username,
      text: message,
      time: new Date().toLocaleTimeString(),
    });

    setMessage("");
  };

  return (

    <div className="flex gap-3 p-4 border-t bg-white">

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-medium transition"
      >
        Send
      </button>

    </div>

  );
}

export default ChatInput;