const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: String, required: true}
});

module.exports = mongoose.model('Proyecto', ProyectoSchema)