const express = require("express");
const router = express.Router();
const { Message } = require("../models/message");

router.get("/messages", (request, response) => {
  Message.query().then((messages) => response.json(messages));
});

router.post("/messages", (request, response) => {
  const { message } = request.body;
  Message.query()
    .insert({
      text: message.text,
      username: message.username,
      created_at: message.timestamp,
    })
    .then((newMessage) => response.status(201).json(newMessage));
});

module.exports = { messagesRouter: router };
