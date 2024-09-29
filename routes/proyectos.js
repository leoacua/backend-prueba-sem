const express = require('express');
const cors = require('cors');
const router = express.Router();
const { obtenerProyectos, crearProyectos, actualizarProyectos, eliminarProyectos  } = require('../controllers/proyectoController.js');

// Operaciones CRUD para las tareas
router.get('/', obtenerProyectos); // Obtener todas las proyectos
router.post('/', crearProyectos); // Crear una nueva proyectos
router.put('/:id', actualizarProyectos); // Actualizar una tarea proyectos
router.delete('/:id', eliminarProyectos); // Eliminar una proyectos

module.exports = router;
