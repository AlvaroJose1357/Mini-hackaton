const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDBMongo, connectBDPostgres } = require("./config/BD");

const PORT = process.env.PORT;

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDBMongo();
connectBDPostgres();

// Rutas
app.use("/api", require("./routes/endpoint"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
