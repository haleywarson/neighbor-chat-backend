const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;
const { usersRouter } = require("./routes/users");
const { messagesRouter } = require("./routes/messages");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(usersRouter, messagesRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// SOCKETS
const socketPort = 8000;
// const { emit } = require("process");
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
});

io.on("new-message", (message) => {
  io.emit(message);
});

server.listen(socketPort, () => {
  console.log(`listening on ${socketPort}`);
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
// });

// // sends out the 10 most recent messages from recent to old
// const emitMostRecentMessages = () => {
//   database
//     .getSocketMessages()
//     .then((result) => io.emit("chat message", result))
//     .catch(console.log);
// };
// // connects, creates message, and emits top 10 messages
// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("chat message", (msg) => {
//     database
//       .createSocketMessage(JSON.parse(msg))
//       .then((_) => {
//         emitMostRecentMessages();
//       })
//       .catch((err) => io.emit(err));
//   });

//   // close event when user disconnects from app
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
