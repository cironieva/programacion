const group = require('./module/myModule');

const modulo = require('./module/myModule')  // importar TODO objeto con las constantes dentro de una const

console.log(modulo); // imprime el objeto entero, con todos los exports

console.log(modulo.myWebAddress); // para acceder a una const específica, simplemente poner un punto

console.log(modulo.myUser.age); // para acceder a un valor específico dentro de un objeto, poner otro punto


// para importar solo unas partes del objeto, puede ser útil si el objeto es demasiado grande

const {myAge, myUser} = require('./module/myModule');

console.log(myAge);



// MÓDULO MATH

const math = require('./math/index');

console.log(math.add(2, 2));