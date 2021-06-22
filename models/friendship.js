const { Model } = require("objection");
const database = require("../queries");
Model.knex(database);

class Friendship extends Model {
  static tableName = "friendships";
}

module.exports = { Friendship };
