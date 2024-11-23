requiere("dotenv").config();
const { Pool } = require("pg");
const mongoose = require("mongoose");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

const connectBDPostgres = async () => {
  try {
    await pool.connect();
    console.log("Conexión exitosa a PostgreSQL");
  } catch (error) {
    console.error("Error al conectar a PostgreSQL:", error.message);
  }
};

module.exports = { connectDB, connectBDPostgres, pool };
