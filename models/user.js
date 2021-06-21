const { Model } = require("objection");
const database = require("../queries");
Model.knex(database);

class User extends Model {
  static tableName = "users";

  static relationMappings = {
    friends: {
      relation: Model.ManyToManyRelation,
      modelClass: User,
      join: {
        from: "users.id",
        through: {
          from: "friendships.user_id",
          to: "friendships.friend_id",
        },
        to: "users.id",
      },
    },
  };
}

module.exports = { User };
