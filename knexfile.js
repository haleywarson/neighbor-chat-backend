module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/neighbors",
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
