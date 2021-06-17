exports.up = function (knex) {
  "friendships",
    (t) => {
      t.increments();
      t.references("user");
      t.references("user_2");
    };
};

exports.down = function (knex) {};
