exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("friendships")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("friendships").insert([
        { user_id: 17, friend_id: 20 },
        { user_id: 17, friend_id: 18 },
        { user_id: 17, friend_id: 19 },
      ]);
    });
};
