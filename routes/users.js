const express = require("express");
const router = express.Router();
const { authenticate } = require("./auth");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get users
router.get("/users", authenticate, (request, response) => {
  User.query().then((users) => response.json(users));
});

// Sign up
router.post("/users", (request, response) => {
  // grab user object from request
  const { user } = request.body;
  const saltRounds = 12;
  // hash password using bcrypt, then post new user
  bcrypt.hash(user.password, saltRounds).then((hashedPassword) => {
    User.query()
      .insert({ username: user.username, password_digest: hashedPassword })
      .then((newUser) => response.status(201).json(newUser));
  });
});

// Log in
router.post("/login", (request, response) => {
  // grab user object from request
  const { user } = request.body;

  User.query()
    // see if user exists in db, and if not, throw error, and if so,
    // make sure password matches, then use secret to login + jwt to give token
    .findOne({ username: user.username || "" })
    .then((existingUser) => {
      if (!existingUser) {
        response.status(401).json({ error: "Invalid username/password." });
      } else {
        bcrypt
          .compare(user.password, existingUser.password_digest)
          .then((isMatch) => {
            if (!isMatch) {
              response
                .status(401)
                .json({ error: "Invalid username/password." });
            } else {
              const secret = process.env.AUTH_SECRET;
              const payload = { user_id: existingUser.id };
              const token = jwt.sign(payload, secret);
              response.status(200).json({ token, user: existingUser });
            }
          });
      }
    });
});

module.exports = { usersRouter: router };
