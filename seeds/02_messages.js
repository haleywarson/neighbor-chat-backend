exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("messages").insert([
        {
          text: "blah",
        },
        {
          text: "blahblah",
        },
        {
          text: "blahblahblah",
        },
      ]);
    });
};
