const express = require("express");
const router = express.Router();
const { Message } = require("../models/message");

router.get("/messages", (request, response) => {
  Message.query().then((messages) => response.json(messages));
});

module.exports = { messagesRouter: router };
