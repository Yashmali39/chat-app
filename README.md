# Simple Chat Application

## Overview

This is a real-time chat application built using React, Node.js, Express, and Socket.io. The application allows multiple users to join using a username and exchange messages instantly through WebSocket communication.

---

## Features

- Real-time messaging using Socket.io
- Dummy username-based login
- Multiple users can chat simultaneously
- Message timestamps
- Logout functionality
- Responsive user interface
- Modular frontend and backend architecture

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Tailwind CSS
- Socket.io Client

### Backend

- Node.js
- Express.js
- Socket.io
- CORS
- Dotenv

---

## Project Structure

```text
chat-app
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── socket
│   │   ├── routes
│   │   ├── controllers
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Yashmali39/chat-app.git
cd chat-app
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=3000
```

Start the backend server.

```bash
npm run dev
```

The backend will run at:

```
http://localhost:3000
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the frontend.

```bash
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

## Application Flow

1. Enter a username.
2. Join the chat.
3. Send messages.
4. Messages are broadcast to all connected users in real time using Socket.io.
5. Each message displays:
   - Sender
   - Message
   - Timestamp

---

## Future Enhancements

- JWT Authentication
- Chat rooms
- Online user status
- Message persistence using MongoDB
- Typing indicator
- File sharing

---

## Author

Yash Mali

Computer Engineering Student

GitHub: https://github.com/Yashmali39
---

## License

This project was developed as part of a technical assignment for learning and demonstration purposes.
