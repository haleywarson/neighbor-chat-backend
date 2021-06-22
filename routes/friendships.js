const express = require("express");
const router = express.Router();
const { authenticate } = require("./auth");
const { Friendship } = require("../models/friendship");

// Get friendships
router.get("/friendships", authenticate, (request, response) => {
  Friendship.query().then((friendships) => response.json(friendships));
});

// Create message
router.post("/friendships", authenticate, (request, response) => {
  const { friendship } = request.body;

  Friendship.query()
    .insert({
      user_id: friendship.user_id,
      friend_id: friendship.friend_id,
    })
    .then((newFriendship) => response.status(201).json(newFriendship));
});

module.exports = { friendshipsRouter: router };
