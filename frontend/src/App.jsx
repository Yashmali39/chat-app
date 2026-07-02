import { useEffect } from "react";
import { io } from "socket.io-client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

const socket = io("http://localhost:3000", {
  autoConnect: false,
});

function App() {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/chat"
          element={<Chat />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;