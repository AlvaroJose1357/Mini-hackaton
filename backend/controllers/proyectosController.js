const { pool } = require("../config/BD");
const Proyecto = require("../models/Proyecto");

// Controlador para crear un nuevo proyecto.
exports.crearProyecto = async (req, res) => {
  try {
    // Extrae los datos del cuerpo de la solicitud.
    const { nombre, descripcion, estado } = req.body;

    // Crea un nuevo proyecto en la base de datos MongoDB utilizando un modelo Mongoose.
    const proyecto = new Proyecto({ nombre, descripcion, estado });
    await proyecto.save(); // Guarda el proyecto en MongoDB.

    // Inserta información del proyecto en PostgreSQL.
    // Se utiliza el _id generado por MongoDB como identificador en PostgreSQL.
    const proyectoDB = await pool.query(
      "INSERT INTO proyectos (proyecto_id, nombre) VALUES ($1, $2) RETURNING *",
      [proyecto._id.toString(), nombre] // Convierte el _id de MongoDB a string para PostgreSQL.
    );

    // Envía una respuesta exitosa con los datos almacenados en ambas bases de datos.
    res
      .status(201) // Código HTTP 201: recurso creado exitosamente.
      .json({
        proyectoMongo: proyecto, // Datos del proyecto almacenado en MongoDB.
        proyectoPostgres: proyectoDB.rows[0], // Datos del proyecto almacenado en PostgreSQL.
      });
  } catch (error) {
    // Maneja errores en el proceso y responde con un código HTTP 500.
    res.status(500).json({ message: "Error al crear el proyecto", error });
  }
};

// Controlador para listar todos los proyectos almacenados en MongoDB.
exports.listarProyectos = async (req, res) => {
  try {
    // Recupera todos los proyectos desde MongoDB usando Mongoose.
    const proyectos = await Proyecto.find();

    // Envía una respuesta exitosa con el listado de proyectos.
    res.status(201).json(proyectos); // Código HTTP 201: recurso encontrado.
  } catch (error) {
    // Maneja errores en el proceso de consulta y responde con un código HTTP 500.
    res.status(500).json({ message: "Error al listar los proyectos", error });
  }
};
