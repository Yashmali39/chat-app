const { Server } = require("socket.io");

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {

        console.log(`User Connected: ${socket.id}`);

        socket.on("send_message", (messageData) => {

            //console.log(messageData);

            io.emit("receive_message", messageData);

        });

        socket.on("disconnect", () => {
            console.log(`User Disconnected: ${socket.id}`);
        });

    });

    return io;
};

module.exports = initializeSocket;