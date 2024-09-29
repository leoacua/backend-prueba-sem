const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    fecha_inicio: { type: Date },
    fecha_fin: { type: Date },
    tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tarea' }] // Lista de tareas relacionadas
  });
  
  module.exports = mongoose.model('Proyecto', ProyectoSchema);