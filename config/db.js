const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    // Cadena de conexión desde el archivo .env
    const uri = process.env.MONGODB_URI;

    // Verificar que la cadena de conexión no esté vacía o undefined
    if (!uri) {
      throw new Error('La cadena de conexión a MongoDB no está definida.');
    }

    // Conectar a MongoDB
    await mongoose.connect(uri);

    console.log('Conectado a MongoDB Atlas correctamente');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Salir del proceso si no se puede conectar
  }
};

module.exports = conectarDB;
