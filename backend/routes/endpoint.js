const express = require("express");
const router = express.Router();
// controllador
const mainController = require("../controllers/mainController");
const actividadesController = require("../controllers/actividadesController");
const proyectosController = require("../controllers/proyectosController");

// agrega los proyectos
router.post("/createProyect", proyectosController.crearProyecto);
router.get("/proyect", proyectosController.listarProyectos);
// obtiene las actividades relacionadas a un proyecto
router.get(
  "/readActivity/:proyecto_id",
  actividadesController.listarActividades
);
// agrega las actividades relacionadas a un proyecto el cual el id se pasa por body
router.post("/createActivity", actividadesController.crearActividades);

module.exports = router;
