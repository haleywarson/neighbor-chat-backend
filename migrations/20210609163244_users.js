exports.up = function (knex) {
  return knex.schema.createTable("users", (user) => {
    user.increments("id");
    user.string("username");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
