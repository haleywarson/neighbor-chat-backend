const knex = require("knex");
const database_config = require("./knexfile").development;
const database = knex(database_config);

module.exports = database;
