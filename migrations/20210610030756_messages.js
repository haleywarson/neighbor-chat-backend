exports.up = function (knex) {
  return knex.schema.createTable("messages", (message) => {
    message.increments("id");
    message.string("text");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("messages");
};
