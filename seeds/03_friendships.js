exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("friendships")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("friendships").insert([
        { user_id: 37, friend_id: 38 },
        { user_id: 37, friend_id: 39 },
        { user_id: 37, friend_id: 40 },
      ]);
    });
};
