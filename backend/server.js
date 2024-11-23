const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDBMongo, connectBDPostgres } = require("./config/BD");

const PORT = process.env.PORT;

// Crea una instancia de una aplicación Express.
const app = express();

// Carga las variables de entorno desde un archivo .env.
dotenv.config();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear solicitudes con cuerpos en formato JSON.
app.use(express.json());

// Conexión a la base de datos
connectDBMongo();
connectBDPostgres();

// Rutas
app.use("/api", require("./routes/endpoint"));

// Inicia el servidor en el puerto especificado y muestra un mensaje en la consola.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
