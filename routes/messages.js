const express = require("express");
const router = express.Router();
const { authenticate } = require("./auth");
const { Message } = require("../models/message");

// Get messages
router.get("/messages", authenticate, (request, response) => {
  Message.query().then((messages) => response.json(messages));
});

// Create message
router.post("/messages", authenticate, (request, response) => {
  const { message } = request.body;
  Message.query()
    .insert({
      text: message.text,
      username: message.username,
    })
    .then((newMessage) => response.status(201).json(newMessage));
});

module.exports = { messagesRouter: router };
