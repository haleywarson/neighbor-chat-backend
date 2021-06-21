exports.up = function (knex) {
  return knex.schema.createTable("friendships", (t) => {
    t.increments();
    t.integer("user_id").references("users.id");
    t.integer("friend_id").references("users.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("friendships");
};
