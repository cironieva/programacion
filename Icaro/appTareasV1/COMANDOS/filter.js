const tareas = require('../taskData');

const filter = (input) => {
  let filteredTasks = [];
  for (i = 0; i < tareas.tasks.length; i++) {
    if (tareas.tasks[i].title.includes(input)) {
      console.log(tareas.tasks[i].title);
      filteredTasks.push(tareas.tasks[i]);
    }
  }
  return filteredTasks;
}

module.exports = { filter };