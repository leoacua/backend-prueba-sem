const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { titulo, descripcion, prioridad, fecha_limite, estado, asignado_a } = req.body;
  try {
    const task = new Task({
      titulo,
      descripcion,
      prioridad,
      fecha_limite,
      estado,
      asignado_a,
    });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find().populate('asignado_a', 'nombre email');
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };