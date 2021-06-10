const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const db = require("./queries");
const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// MODELS
const { User } = require("./models/user");
const { Message } = require("./models/message");

// ROUTES
app.get("/users", (request, response) => {
  User.query().then((users) => response.json(users));
});

app.get("/messages", (request, response) => {
  Message.query().then((messages) => response.json(messages));
});

// app.get("/messages", db.getMessages);
// app.post("/messages", db.createMessage);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
