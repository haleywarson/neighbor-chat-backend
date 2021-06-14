require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
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
const { Message } = require("./models/message");
const io = new Server(server, {
  cors: {
    origin: "*", // Allow cross-origin requests
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log("backend msg", msg);
    // Message.query()
    // createnewsocketmessage via post route
    // emit most recent messages (10 most recent)
    // .catch((err) => io.emit(err));
  });

  // close event when user disconnects from app
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(socketPort, () => {
  console.log(`listening on ${socketPort}`);
});
// --------------------------------------------------------------
//on login: connects, creates message, and emits top 10 messages
// // sends out the 10 most recent messages from recent to old
// const emitMostRecentMessages = () => {
//   Message.query()
//     .getSocketMessages()
//     .then((result) => io.emit("chat message", result))
//     .catch(console.log);
// };
