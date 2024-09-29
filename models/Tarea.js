const mongoose = require('mongoose');

// Definición del esquema de la tarea
const TareaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    prioridad: { type: String, enum: ['Baja', 'Media', 'Alta'], default: 'Baja' },
    estado: { type: String, enum: ['Pendiente', 'En Progreso', 'Completada'], default: 'Pendiente' },
    asignadoA: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia a la colección de Usuarios
    proyectoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' }, // Referencia a la colección de Proyectos
    fechaLimite: { type: Date },
    creadoEn: { type: Date, default: Date.now }
});

// Exportar el modelo Tarea
module.exports = mongoose.model('Tarea', TareaSchema);