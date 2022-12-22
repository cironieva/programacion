const tareas = require('../taskData');

list = () => {
  for (i = 0; i < tareas.tasks.length; i++) {
    console.log(tareas.tasks[i].title);
  }
}

module.exports = { list };