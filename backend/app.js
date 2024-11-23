const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const proyectosRoutes = require('./routes/proyectos');
const actividadesRoutes = require('./routes/actividades');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/actividades', actividadesRoutes);

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
