const mongoose = require('mongoose');

// Definición del esquema de la tarea
const TareaSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Definir _id como ObjectId
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    prioridad: { type: String, enum: ['Baja', 'Media', 'Alta'], default: 'Baja' },
    estado: { type: String, enum: ['Pendiente', 'En Progreso', 'Completada'], default: 'Pendiente' },
    asignadoA: { type: String, required: true }, // Referencia a la colección de Usuarios
    fechaLimite: { type: Date },
    creadoEn: { type: Date, default: Date.now }
});

// Exportar el modelo Tarea
module.exports = mongoose.model('Tarea', TareaSchema);