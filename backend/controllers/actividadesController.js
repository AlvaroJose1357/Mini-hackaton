const { pool } = require("../config/BD");

// Exporta un controlador para crear nuevas actividades asociadas a un proyecto.
exports.crearActividades = async (req, res) => {
  // Desestructura los valores necesarios del cuerpo de la solicitud.
  const { proyecto_id, nombre, responsable } = req.body;

  try {
    // Ejecuta la consulta SQL para insertar una nueva actividad en la base de datos.
    // Los valores son proporcionados mediante parámetros para evitar inyecciones SQL.
    result = await pool.query(
      "INSERT INTO actividades (proyecto_id, nombre, responsable) VALUES ($1, $2, $3 ) RETURNING *",
      [proyecto_id, nombre, responsable]
    );

    // Envía una respuesta de éxito con el código HTTP 201 (creado) y la actividad recién creada.
    res.status(201).json({
      message: "Actividad creada correctamente",
      actividad: result.rows[0], // Incluye los datos de la actividad creada en la respuesta.
    });
  } catch (error) {
    // Maneja cualquier error que ocurra durante la creación de la actividad.
    // Envía una respuesta con el código HTTP 500 (error interno del servidor).
    res.status(500).json({ message: "Error al crear la actividad", error });
  }
};

// Exporta un controlador para listar actividades de un proyecto específico.
exports.listarActividades = async (req, res) => {
  // Obtiene el identificador del proyecto desde los parámetros de la solicitud.
  const { proyecto_id } = req.params;

  try {
    // Ejecuta la consulta SQL para recuperar todas las actividades relacionadas con el proyecto dado.
    const query = `
      SELECT * FROM actividades WHERE proyecto_id = $1;
    `;
    const actividades = await pool.query(query, [proyecto_id]);

    // Envía una respuesta de éxito con el código HTTP 200 (OK) y las actividades encontradas.
    res.status(200).json(actividades.rows);
  } catch (error) {
    // Maneja cualquier error que ocurra durante la consulta.
    // Envía una respuesta con el código HTTP 500 (error interno del servidor).
    res.status(500).json({ message: "Error al listar las actividades", error });
  }
};
