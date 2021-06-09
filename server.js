const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/students", (req, res) => {
  res.send({ name: "haley" });
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});

// module.exports = app;

// var http = require("http").createServer(app);
// var io = require("socket.io")(http);
// const STATIC_CHANNELS = ["global_notifications", "global_chat"];
// const knex = require("knex");
// const database_config = require("./knexfile").development;
// const database = knex(database_config);

// io.on("connection", (socket) => {
//   /* socket object may be used to send specific messages to the new connected client */
//   console.log("new client connected");
//   socket.emit("connection", null);
//   //   With the  socket.emit  function, custom events can be sent from the back end to the front end through the newly established socket connection. This method will only send messages between the specific client that was recently connected.
// });
