const Proyecto = require('../models/Proyecto');
const pool = require('../config/BD');

exports.obtenerProyectosConActividades = async(req,res) =>{
    try{
        const proyectosConActividades = await Promise.all(
            proyectos.map(async (proyecto) => {
                const query = `
                    SELECT * FROM actividades WHERE proyecto_id = $1;
                `;
                const actividades = await pool.query(query, [proyecto._id]);
                return {
                    ...proyecto._doc,
                    actividades: actividades.rows,
                };
            })
        );
        res.status(200).json(proyectosConActividades);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener proyectos con actividades', error });
    }
};