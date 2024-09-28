const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
    match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'],
  },
  rol: {
    type: String,
    default: 'Desarrollador',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
