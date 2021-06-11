const { Model } = require("objection");
const database = require("../queries");
Model.knex(database);

class Message extends Model {
  static tableName = "messages";
}

module.exports = { Message };
