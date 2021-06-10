const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

require("./knexfile")[process.env.NODE_ENV] || "development";
const database = require("knex")(connection);

app.get("/users", (request, response) => {
  database("neighbors").then((users) => response.json(users));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
