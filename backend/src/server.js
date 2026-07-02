require("dotenv").config();

const http = require("http");
const app = require("./app");
const initializeSocket = require("./socket/socketHandler");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Initialize Socket.io
initializeSocket(server);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});