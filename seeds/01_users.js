exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Haley", address: "1234 Lakewood St."},
        { username: "Tim", address: "4598 Cedar Ln." },
        { username: "Hattie", address: "5656 Aspen Ridge Rd." },
        { username: "Colette", address: "1235 Lakewood St." },
      ]);
    });
};
