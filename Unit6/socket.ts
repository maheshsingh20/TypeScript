
//package import  
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

// instance of express app
const app = express();
//port
const PORT = 3000;
// create http server 
const server = http.createServer(app);

// create socket.io server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173/", // Allow all origins for development
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('A user is Connected:', socket.id);
  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });
  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});


server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});