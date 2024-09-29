const mongoose = require('mongoose');

// Definir el esquema para el modelo de Usuario
const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String, // Tipo de dato: String (Cadena de texto)
    required: true // Campo requerido
  },
  correo: {
    type: String,
    required: true,
    unique: true, // El correo debe ser único en la base de datos
    match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido'] // Expresión regular para validar el formato del correo
  },
  pass: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  rol: {
    type: String,
    enum: ['user', 'admin'], // Valores permitidos: 'user' o 'admin'
    default: 'user' // Valor por defecto: 'user'
  },
  creadoEn: {
    type: Date,
    default: Date.now // Fecha de creación por defecto: fecha actual
  }
});

// Exportar el modelo basado en el esquema
module.exports = mongoose.model('Usuario', UsuarioSchema);