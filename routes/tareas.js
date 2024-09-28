const express = require('express');
const router = express.Router();
const { obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } = require('../controllers/tareaController');

// Operaciones CRUD para las tareas
router.get('/', obtenerTareas); // Obtener todas las tareas
router.post('/', crearTarea); // Crear una nueva tarea
router.put('/:id', actualizarTarea); // Actualizar una tarea existente
router.delete('/:id', eliminarTarea); // Eliminar una tarea

module.exports = router;
