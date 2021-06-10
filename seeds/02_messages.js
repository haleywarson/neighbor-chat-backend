exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("messages").insert([
        {
          text: "blah",
          username: "username1",
          created_at: "2021-09-06 07:37:31 PM",
        },
        {
          text: "blahblah",
          username: "username2",
          created_at: "2021-09-06 07:37:31 PM",
        },
        {
          text: "blahblahblah",
          username: "username3",
          created_at: "2021-09-06 07:37:31 PM",
        },
      ]);
    });
};
