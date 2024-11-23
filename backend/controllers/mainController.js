const Proyecto = require("../models/Proyecto");
const { pool } = require("../config/BD");

// Controlador para obtener todos los proyectos junto con sus actividades.
exports.obtenerProyectosConActividades = async (req, res) => {
  try {
    // Recupera todos los proyectos desde MongoDB usando el modelo Mongoose.
    const proyectos = await Proyecto.find();

    // Para cada proyecto, busca las actividades asociadas en PostgreSQL.
    const proyectosConActividades = await Promise.all(
      proyectos.map(async (proyecto) => {
        // Consulta SQL para obtener las actividades que corresponden al proyecto actual.
        const query = `
                    SELECT * FROM actividades WHERE proyecto_id = $1;
                `;
        const actividades = await pool.query(query, [proyecto._id]); // Usa el _id de MongoDB como proyecto_id en PostgreSQL.

        // Retorna una estructura combinada con los datos del proyecto y sus actividades.
        return {
          ...proyecto._doc, // Incluye todos los campos del documento del proyecto de MongoDB.
          actividades: actividades.rows, // Agrega las actividades asociadas desde PostgreSQL.
        };
      })
    );

    // Envía una respuesta exitosa con el código HTTP 200 (OK) y los datos de proyectos con actividades.
    res.status(200).json(proyectosConActividades);
  } catch (error) {
    // Maneja errores durante el proceso y envía un mensaje descriptivo al cliente.
    res.status(500).json({
      error: "Error al obtener proyectos con actividades",
      details: error, // Incluye los detalles del error para facilitar el debugging.
    });
  }
};
