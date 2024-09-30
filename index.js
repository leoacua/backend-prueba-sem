const tareasRoutes = require('./routes/tareas.js');
const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
conectarDB();

// Middleware para manejo de CORS y JSON
app.use(cors({ origin: ['http://backend-semx.vercel.app','https://frontemd-sempx.vercel.app/'], // Permitir solicitudes desde el frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,}));
app.use(express.json());

// Rutas de la API
app.use('/api/tareas',tareasRoutes);



const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () => console.log(`Servidor corriendo en el puerto ${PUERTO}`));
