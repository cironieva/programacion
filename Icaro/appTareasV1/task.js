const list = require('./COMANDOS/list');
const find = require('./COMANDOS/find');
const edit = require('./COMANDOS/edit');
const filter = require('./COMANDOS/filter');
const description = require('./COMANDOS/return');

switch (process.argv[2]) {
  case 'list':
    list.list();
    break;
  case 'find':
    find.find(process.argv[3]);
    break;
  case 'edit':
    edit.edit(process.argv[3], process.argv[4]);
    break;
  case 'filter':
    filter.filter(process.argv[3]);
    break;
  case 'return':
    description.description(process.argv[3]);
    break;
  default:
    console.log('no es una opción válida');
}

