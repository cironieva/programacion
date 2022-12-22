const leer = require('./CRUD/read');

switch (process.argv[2]) {
  case 'read':
    console.log(leer.read());
    break;
  default:
    console.log('no es una opción válida');
}