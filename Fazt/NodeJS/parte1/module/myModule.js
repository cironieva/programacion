const myWebAddress = 'faztweb.com';

const myAge = 19;

const myArray = [1, 2, 3];

const myUser = {
  name: 'rian',
  age: 30
};

// Para exportar varias constantes, crear un objeto con las constantes y exportar ese objeto

const group = {
  myWebAddress: myWebAddress,
  myAge: myAge,
  myArray: myArray,
  myUser: myUser
}

module.exports = group;


// Mejor, exportar directamente el objeto, sin declararlo previamente


module.exports = {
  myWebAddress: myWebAddress,
  myAge: myAge,
  myArray: myArray,
  myUser: myUser
};


// Mejor aun, cuando en un objeto la key y el value se llaman igual, podemos ignorar la repetición

module.exports = {
  myWebAddress,
  myAge,
  myArray,
  myUser
}

// Exports individuales, al importarlos usar el nombre de la izquierda y siempre usar llaves
// ej: const {direccion} = requiere('/...);

module.exports.direccion = myWebAddress;
module.exports.edad = myAge;
module.exports.arreglo = myArray;
module.exports.usuario = myUser;


// Si al requerirlo no se especifica cual, se requerirán todos los exports que haya