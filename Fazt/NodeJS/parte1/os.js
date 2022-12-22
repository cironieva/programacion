// Módulo OperatingSystem

const os = require('os');

// Métodos del módulo

console.log(os.userInfo());   // muestra informacion del usuario actual de la pc
console.log(os.uptime());     // muestra cuántos segundos transcurrieron desde que prendió la pc
console.log(os.platform());   // muestra el so que estoy usando
console.log(os.release());    // muestra la version de so que estoy usando
console.log(os.totalmem());   // muestra la memoria ram total en bytes
console.log(os.freemem());    // muestra la memoria ram libre en bytes

// TABLAS EN CONSOLA

console.table({
  os: os.platform(),
  time: os.uptime(),
  freeRam: os.freemem()
});