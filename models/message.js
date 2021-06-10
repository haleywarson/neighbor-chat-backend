const { Model } = require("objection");
const database = require("../db");
Model.knex(database);

class Message extends Model {
  static tableName = "messages";
}

module.exports = { Message };
