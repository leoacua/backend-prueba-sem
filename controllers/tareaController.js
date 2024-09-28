const Tarea = require('../models/Tarea');

// Obtener todas las tareas
const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (err) {
        res.status(500).send('Error en el servidor');
    }
};

// Crear una nueva tarea
const crearTarea = async (req, res) => {
    const { titulo, descripcion, prioridad, estado, asignadoA, fechaLimite } = req.body;

    try {
        const nuevaTarea = new Tarea({
            titulo,
            descripcion,
            prioridad,
            estado,
            asignadoA,
            fechaLimite
        });

        const tarea = await nuevaTarea.save();
        res.json(tarea);
    } catch (err) {
        res.status(500).send('Error en el servidor');
    }
};

// Actualizar una tarea existente
const actualizarTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) return res.status(404).json({ msg: 'Tarea no encontrada' });

        tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tarea);
    } catch (err) {
        res.status(500).send('Error en el servidor');
    }
};

// Eliminar una tarea
const eliminarTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) return res.status(404).json({ msg: 'Tarea no encontrada' });

        await Tarea.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Tarea eliminada' });
    } catch (err) {
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { obtenerTareas, crearTarea, actualizarTarea, eliminarTarea };
