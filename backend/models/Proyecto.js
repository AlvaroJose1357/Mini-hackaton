const mongoose = require("mongoose");

// Creación del esquema de la colección en MongoDB
const ProyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: { type: String, required: true },
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);
