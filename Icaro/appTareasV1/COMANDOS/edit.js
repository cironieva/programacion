const tareas = require('../taskData');

const edit = (title, newDesc) => {
  for (i = 0; i < tareas.tasks.length; i++) {
    if (tareas.tasks[i].title == title) {
      task = tareas.tasks[i];
      task.desc = newDesc;
      return console.log(task);
    }
  }
  return console.log("tarea no encontrada");
}

module.exports = { edit }; 