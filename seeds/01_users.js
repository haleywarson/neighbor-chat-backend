exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("friendships")
    .del()
    .then(() => {
      knex("users")
        .del()
        .then(function () {
          // Inserts seed entries
          return knex("users").insert([
            {
              username: "Ada",
              photo:
                "https://media.istockphoto.com/photos/portrait-of-gorgeous-young-laughing-woman-joy-and-happiness-picture-id1051999102?k=6&m=1051999102&s=612x612&w=0&h=BvHRHN9JJ4AbZiaY2gUj8Gu-REtTZqJpDomK-dCjwo8=",
              address: "1234 Lakewood St.",
            },
            {
              username: "Tim",
              photo:
                "https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=6&m=1158245623&s=612x612&w=0&h=y0LbpRFMHMj_9YC_kpKvLYcijEunxP27KyjXBrDHcFg=",
              address: "1225 Lakewood St.",
            },
            {
              username: "Ben",
              photo:
                "https://media.istockphoto.com/photos/never-leave-home-without-your-confidence-picture-id1157185406?k=6&m=1157185406&s=612x612&w=0&h=HRgK4lfnj-np9qTLZ1WlChcWaJIuI7jyWhxH9bfbrUM=",
              address: "1230 Lakewood St.",
            },
            {
              username: "Jane",
              photo:
                "https://media.istockphoto.com/photos/beauty-portrait-of-happy-young-woman-picture-id660791130?k=6&m=660791130&s=612x612&w=0&h=c1A22ej-mh92yL8o9fzaEHp2hWtFoQCrC8vYnDaQ9eY=",
              address: "1235 Lakewood St.",
            },
            {
              username: "Rita",
              photo:
                "https://media.istockphoto.com/photos/happy-senior-woman-on-couch-picture-id1044149594?k=6&m=1044149594&s=612x612&w=0&h=z8eP7374oaQdF1CwLRTFPYNVgchjevMI1np8gz6BHo4=",
              address: "1212 Lakewood St.",
            },
          ]);
        });
    });
};
