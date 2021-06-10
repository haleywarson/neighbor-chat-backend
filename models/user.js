const { Model } = require("objection");
const database = require("../queries");
Model.knex(database);

class User extends Model {
  static tableName = "users";
}

module.exports = User;
