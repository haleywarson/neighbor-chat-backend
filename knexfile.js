// const dotenv = require("dotenv");
// dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/neighbors",
    // migrations: {
    //   directory: "./db/migrations",
    // },
    // seeds: {
    //   directory: "./db/seeds/dev",
    // },
    // useNullAsDefault: true,
  },
};
