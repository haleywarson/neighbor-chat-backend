exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("friendships")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("friendships").insert([
        { user_id: 27, friend_id: 28 },
        { user_id: 27, friend_id: 29 },
        { user_id: 27, friend_id: 30 },
      ]);
    });
};
