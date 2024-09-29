const Proyecto = require('../models/Proyecto');

const obtenerProyectos = async (req, res) => {
  try {
      const proyecto = await Proyecto.find();
      res.json(proyecto);
  } catch (err) {
      res.status(500).send('Error en el servidor');
  }
};

// Crear un nuevo proyecto
const crearProyectos = async (req, res) => {
  const { nombre, correo, pass, rol } = req.body;

  try {
      // Crear una instancia de proyecto con los datos recibidos
      const nuevoproyecto = new proyecto({
          nombre,
          correo,
          pass,
          rol
      });

      // Guardar el nuevo proyecto en la base de datos
      const proyecto = await nuevoproyecto.save();
      res.json(proyecto); // Enviar la respuesta con el proyecto creado
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Error en el servidor');
  }
};

// Actualizar una proyecto existente
const actualizarProyectos = async (req, res) => {
  try {
      let proyecto = await proyecto.findById(req.params.id);

      if (!proyecto) return res.status(404).json({ msg: 'proyecto no encontrado' });

      proyecto = await proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(proyecto);
  } catch (err) {
      res.status(500).send('Error en el servidor');
  }
};

const eliminarProyectos = async (req, res) => {
  try {
      let proyecto = await proyecto.findById(req.params.id);

      if (!proyecto) return res.status(404).json({ msg: 'proyecto no encontrada' });

      await proyecto.findByIdAndRemove(req.params.id);
      res.json({ msg: 'proyecto eliminada' });
  } catch (err) {
      res.status(500).send('Error en el servidor');
  }
};


module.exports = { obtenerProyectos, crearProyectos, actualizarProyectos, eliminarProyectos };