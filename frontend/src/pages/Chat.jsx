import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import socket from "../services/socket";

import ChatInput from "../components/ChatInput";
import MessageList from "../components/MessageList";
import Navbar from "../components/Navbar";

function Chat() {
    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!username) {
            navigate("/");
            return;
        }

        socket.connect();

        socket.on("receive_message", (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off("receive_message");
            socket.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-100">

            <Navbar username={username} />

            <div className="flex justify-center p-4">

                <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">

                    <MessageList
                        messages={messages}
                        currentUser={username}
                    />

                    <ChatInput
                        socket={socket}
                        username={username}
                    />

                </div>

            </div>

        </div>
    );
}

export default Chat;