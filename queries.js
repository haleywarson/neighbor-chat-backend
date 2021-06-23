const knex = require("knex");
const database_config =
  require("./knexfile")[process.env.NODE_ENV || "development"];
const database = knex(database_config);

module.exports = database;
