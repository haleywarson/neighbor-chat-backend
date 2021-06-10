const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
const usersRouter = require("./routes/users");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(usersRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
// // SOCKETS
// const socketPort = 8000;
// const { emit } = require("process");
// const server = require("http").createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST"],
//   },
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

// server.listen(socketPort, () => {
//   console.log(`listening on ${socketPort}`);
// });
