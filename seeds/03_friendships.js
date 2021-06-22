const { User } = require("../models/user");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("friendships")
    .del()
    .then(() => {
      return User.query();
    })
    .then(function (users) {
      // Inserts seed entries
      return knex("friendships").insert([
        { user_id: users[0].id, friend_id: users[1].id },
        { user_id: users[0].id, friend_id: users[2].id },
        { user_id: users[0].id, friend_id: users[3].id },
      ]);
    });
};
