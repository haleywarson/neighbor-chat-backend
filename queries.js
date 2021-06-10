const knex = require("knex");
const database_config = require("./knexfile").development;
const database = knex(database_config);

module.exports = database;

// /* SOCKET DB */
// const getSocketMessages = () => {
//   return new Promise((resolve) => {
//     pool.query(
//       "SELECT * FROM messages ORDER BY id DESC LIMIT 10",
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         resolve(results.rows);
//       }
//     );
//   });
// };
// const createSocketMessage = (message) => {
//   return new Promise((resolve) => {
//     pool.query(
//       "INSERT INTO messages (text, username) VALUES ($1, $2)",
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         resolve(results.rows);
//       }
//     );
//   });
// };

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
//   const { text, username } = request.body;
//   pool.query(
//     "INSERT INTO messages (text, username) VALUES ($1, $2)",
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(results.rows);
//     }
//   );
// };

// module.exports = {
//   getMessages,
//   createMessage,
//   getSocketMessages,
//   createSocketMessage,
// };