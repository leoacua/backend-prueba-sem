const authRoutes = require('./routes/authRoutes');
const tareahRoutes = require('./routes/tareas.js');
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
conectarDB();

// Middleware para manejo de CORS y JSON
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/tareas', require('./routes/tareas'));

const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () => console.log(`Servidor corriendo en el puerto ${PUERTO}`));
