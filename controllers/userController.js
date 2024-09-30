const Usuarios = require('../models/Usuario');

const obtenerUsuario = async (req, res) => {
  try {
      const usuario = await Usuarios.find();
      res.json(usuario);
  } catch (err) {
      res.status(500).send('Error en el servidor');
  }
};

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
  const { nombre, correo, pass, rol } = req.body;

  try {
      // Crear una instancia de Usuario con los datos recibidos
      const nuevoUsuario = new Usuarios({
          nombre,
          correo,
          pass,
          rol
      });

      // Guardar el nuevo usuario en la base de datos
      const usuario = await nuevoUsuario.save();
      res.json(usuario); // Enviar la respuesta con el usuario creado
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Error en el servidor');
  }
};

// Actualizar una usuario existente
const actualizarUsuario = async (req, res) => {
  try {
      let usuario = await Usuario.findById(req.params.id);

      if (!usuario) return res.status(404).json({ msg: 'usuario no encontrado' });

      usuario = await usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(usuario);
  } catch (err) {
      res.status(500).send('Error en el servidor');
  }
};

const eliminarUsuario = async (req, res) => {
  try {
      let usuario = await Usuarios.findById(req.params.id);
       console.log(usuario)
      if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrada' });

      await usuarios.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Usuario eliminada' });
  } catch (err) {
      res.status(500).send('Error en el servidor');
  }
};


module.exports = { obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario };