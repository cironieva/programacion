const tareas = require('../taskData');

const find = (input) => {
  let bandera = false;
  for (i = 0; i < tareas.tasks.length; i++) {
    if (input == tareas.tasks[i].title) {bandera = true} 
  }
  return console.log(bandera);
}

module.exports = { find };