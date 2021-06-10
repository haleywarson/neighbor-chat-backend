exports.up = function (knex) {
  return knex.schema.createTable("messages", (message) => {
    message.increments("id");
    message.string("text");
    message.string("username");
    message.timestamp("created_at");
  });
};

exports.down = function (knex) {};
