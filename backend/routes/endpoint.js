const express = require("express");
const router = express.Router();
// controllador
const mainController = require("../controllers/mainController");

// agrega los proyectos
router.post("/createProyect");
// obtiene las actividades relacionadas a un proyecto
router.get("/readActivity/:proyecto_id", controller);
// agrega las actividades relacionadas a un proyecto el cual el id se pasa por body
router.post("/createActivity", controller);

module.exports = router;
