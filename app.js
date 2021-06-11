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
const socketPort = 8080;
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
    console.log("backend msg", msg);
  });
  // close event when user disconnects from app
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

server.listen(socketPort, () => {
  console.log(`listening on ${socketPort}`);
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// // sends out the 10 most recent messages from recent to old
// const emitMostRecentMessages = () => {
//   database
//     .getSocketMessages()
//     .then((result) => io.emit("chat message", result))
//     .catch(console.log);
// };
// // connects, creates message, and emits top 10 messages - on login
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
