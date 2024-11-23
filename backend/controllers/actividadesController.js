const { pool } = require("../config/BD");
exports.crearActividades = async (req, res) => {
  const { proyecto_id, nombre, responsable } = req.body;
  try {
    // const query = `
    //   INSERT INTO actividades (proyecto_id, nombre, responsable)
    //   VALUES ($1, $2, $3 ) RETURNING *`;
    result = await pool.query(
      "INSERT INTO actividades (proyecto_id, nombre, responsable) VALUES ($1, $2, $3 ) RETURNING *",
      [proyecto_id, nombre, responsable]
    );

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
