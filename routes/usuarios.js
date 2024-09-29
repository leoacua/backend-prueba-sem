const express = require('express');
const cors = require('cors');
const router = express.Router();
const { obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/userController');

// Operaciones CRUD para las tareas
router.get('/', obtenerUsuario); // Obtener todos los usuarios
router.post('/', crearUsuario); // Crear una nuevo usuario
router.put('/:id', actualizarUsuario); // Actualizar un usuario
router.delete('/:id', eliminarUsuario); // Eliminar un usuario 

module.exports = router;
