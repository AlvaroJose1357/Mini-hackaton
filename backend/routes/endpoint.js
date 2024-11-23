const express = require("express");
const router = express.Router();
// controllador
// const controller = require('../controllers/endpoint');

// agrega los proyectos
router.post("/createProyect", controller);
// obtiene las actividades relacionadas a un proyecto
router.get("/readActivity/:idProyect", controller);
// agrega las actividades relacionadas a un proyecto el cual el id se pasa por body
router.post("/createActivity", controller);

module.exports = router;
