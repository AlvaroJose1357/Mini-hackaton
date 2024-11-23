const { pool } = require("../config/BD");
const Proyecto = require("../models/Proyecto");

//Crear proyecto
exports.crearProyecto = async (req, res) => {
  try {
    const { nombre, descripcion, estado } = req.body;
    const proyecto = new Proyecto({ nombre, descripcion, estado });
    await proyecto.save();

    const proyectoDB = await pool.query(
      "INSERT INTO proyectos (proyecto_id, nombre) VALUES ($1, $2) RETURNING *",
      [proyecto._id.toString(), nombre]
    );
    res
      .status(201)
      .json({ proyectoMongo: proyecto, proyectoPostgres: proyectoDB.rows[0] });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el proyecto", error });
  }
};

//Listar proyectos
exports.listarProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(201).json(proyectos);
  } catch (error) {
    res.status(500).json({ message: "Error al listar los proyectos", error });
  }
};

//Elminar proyectos
exports.eliminarProyectos = async (req, res) => {
  try {
    const { id } = req.params;
    await Proyecto.findByIdDelete(id);
    res.status(201).json({ message: "Proyecto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el proyecto", error });
  }
};
