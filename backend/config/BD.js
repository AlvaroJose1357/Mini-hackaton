require("dotenv").config();
const { Pool } = require("pg");
const mongoose = require("mongoose");

// Configuración de conexión al pool de PostgreSQL.
// Los valores de configuración se toman de las variables de entorno para mayor flexibilidad y seguridad.
const pool = new Pool({
  user: process.env.DB_USER,        // Nombre de usuario para la base de datos.
  host: process.env.DB_HOST,        // Host donde se encuentra el servidor de la base de datos.
  database: process.env.DB_DATABASE, // Nombre de la base de datos.
  password: process.env.DB_PASSWORD, // Contraseña del usuario.
  port: process.env.DB_PORT,        // Puerto de conexión al servidor de la base de datos.
});

// Función para conectar a la base de datos MongoDB utilizando Mongoose.
const connectDBMongo = async () => {
  try {
    // Conecta a MongoDB usando la URL proporcionada en las variables de entorno.
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexión exitosa a MongoDB"); // Mensaje de confirmación en caso de éxito.
  } catch (error) {
    // Manejo de errores en caso de fallos en la conexión.
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Finaliza el proceso con un código de error crítico.
  }
};

// Función para conectar a la base de datos PostgreSQL utilizando el pool configurado.
const connectBDPostgres = async () => {
  try {
    // Establece la conexión al pool de PostgreSQL.
    await pool.connect();
    console.log("Conexión exitosa a PostgreSQL"); // Mensaje de confirmación en caso de éxito.
  } catch (error) {
    // Manejo de errores en caso de fallos en la conexión.
    console.error("Error al conectar a PostgreSQL:", error.message);
  }
};

// Exporta las funciones y el pool para que puedan ser utilizadas en otros módulos.
module.exports = { connectDBMongo, connectBDPostgres, pool };
