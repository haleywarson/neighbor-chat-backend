// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "me",
//   host: "localhost",
//   database: "neighbors",
//   password: "password",
//   port: 9000,
// });

// const getMessages = (request, response) => {
//   pool.query(
//     "SELECT * FROM messages ORDER BY id DESC LIMIT 10",
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json(results.rows);
//     }
//   );
// };

// const createMessage = (request, response) => {
//     const { text, username } = request.body;
//     pool.query(
//     "INSERT INTO messages (text, username) VALUES ($1, $2)
//     RETURNING
//     text, username, created_at",
//         [text, username],
//         (error, results) => {
//             if (error) {
//                 throw error;
//             }
//             response.status(201).send(results.rows);
//             }
//     );
// };

// module.exports = {
//    getMessages,
//    createMessage,
// };
