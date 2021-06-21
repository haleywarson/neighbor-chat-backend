exports.up = function (knex) {
  return knex.schema.alterTable("users", (t) => {
    t.string("photo");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", (t) => {
    t.dropColumn("photo");
  });
};
