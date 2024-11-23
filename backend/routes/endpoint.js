const express = require("express");
const router = express.Router();
// controllador
const mainController = require("../controllers/mainController");
const actividadesController = require("../controllers/actividadesController")

// agrega los proyectos
router.post("/createProyect");
// obtiene las actividades relacionadas a un proyecto
router.get("/readActivity/:proyecto_id", mainController.obtenerProyectosConActividades);
// agrega las actividades relacionadas a un proyecto el cual el id se pasa por body
router.post("/createActivity", actividadesController.crearActividades);

module.exports = router;
