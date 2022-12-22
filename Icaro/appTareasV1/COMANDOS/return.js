const tareas = require('../taskData');

const description = (input) => {
  for (i = 0; i < tareas.tasks.length; i++) {
    if (input == tareas.tasks[i].title) {
      return console.log(tareas.tasks[i].desc);
    }
  }
  return console.log('esa tarea no existe');
}

module.exports = { description };