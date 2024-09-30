const tareasRoutes = require('./routes/tareas.js');
const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
conectarDB();

// Configurar CORS para permitir solicitudes desde dominios específicos
const corsOptions = {
  origin: ['http://backend-semx.vercel.app', 'https://frontemd-sempx.vercel.app'], // Dominios permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Permitir envío de cookies y credenciales
};
app.use(cors(corsOptions));

// Middleware para parseo de JSON
app.use(express.json());

// Rutas de la API
app.use('/api/tareas', tareasRoutes);

const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () => console.log(`Servidor corriendo en el puerto ${PUERTO}`));

