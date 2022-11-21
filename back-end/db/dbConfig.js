const prodConnection = {
    connectionString: process.env.DATABASE_URL,
    max: 30,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  
  const pgp = require("pg-promise")();
  require("dotenv").config();
  
  const connection = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
  };
  
  const db = pgp(process.env.DATABASE_URL ? prodConnection : connection);
  
  module.exports = db, pgp;