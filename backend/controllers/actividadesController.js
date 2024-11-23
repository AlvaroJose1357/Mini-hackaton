const { pool } = require("../config/BD");
exports.crearActividades = async (req, res) => {
  const { activities_id, proyecto_id, nombre, responsable, fecha_entrega } =
    req.body;
  try {
    const query = `
      INSERT INTO actividades (activities_id, proyecto_id, nombre, responsable, fecha_entrega)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    result = await pool.query(query, [
      activities_id,
      proyecto_id,
      nombre,
      responsable,
      fecha_entrega,
    ]);

    res.status(201).json({
      message: "Actividad creada correctamente",
      actividad: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la actividad", error });
  }
};

exports.listarActividades = async (req, res) => {
  const { proyecto_id } = req.params;
  try {
    const query = `
      SELECT * FROM actividades WHERE proyecto_id = $1;
    `;
    const actividades = await pool.query(query, [proyecto_id]);
    res.status(200).json(actividades.rows);
  } catch (error) {
    res.status(500).json({ message: "Error al listar las actividades", error });
  }
};

// exports.eliminarActividades = async (req, res) => {};
