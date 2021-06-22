exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Haley",
          photo:
            "https://media-exp1.licdn.com/dms/image/C5603AQH0sZ3kwyYeQw/profile-displayphoto-shrink_200_200/0/1617032759430?e=1624492800&v=beta&t=RMscwoSIO9dbZUb6kuhw4TgeoRp-uXMf10etj4nBht0",
          address: "1234 Lakewood St.",
        },
        {
          username: "Tim",
          photo:
            "https://images.ctfassets.net/4zfc07om50my/5aKdNskkdDYCm1eozRSb9W/162a3b4ba27f4ceea52cef3953ee9f15/my-name-is-tim-warson-this-is-why-i-joined-aha.jpg?w=1200&h=632&q=50&fm=webp",
          address: "1225 Lakewood St.",
        },
        {
          username: "Ben",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ65X3BKKxoLf2PY6zeNFw7Zrd37LbYqqYNQ&usqp=CAU",
          address: "1230 Lakewood St.",
        },
        {
          username: "Jane",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bpKjowDm6iE376n9ysD2U4YabQlp0iF-uA&usqp=CAU",
          address: "1235 Lakewood St.",
        },
        {
          username: "Rita",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AB_wjPJpWvMo_saNOYvDzTRq4cbJ1MtAHg&usqp=CAU",
          address: "1212 Lakewood St.",
        },
      ]);
    });
};
