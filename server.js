const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MODELS
const User = require("./models/user");

// ROUTES
app.get("/users", (request, response) => {
  User.query().then((users) => response.json(users));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
