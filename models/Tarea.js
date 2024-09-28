const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  titulo: {
     type: String,
     required: [true, 'El título es obligatorio'],
  },
  descripcion: {
     type: String,
  },
   prioridad: {
    type: String,
    enum: ['Alta', 'Media', 'Baja'],
    default: 'Media',
  },
   fecha_limite: {
    type: Date,
  },
  estado: {
    type: String,
    enum: ['Pendiente', 'En Progreso', 'Completada'],
    default: 'Pendiente',
  },
  asignado_a: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Debe asignarse a un usuario'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', TaskSchema);
