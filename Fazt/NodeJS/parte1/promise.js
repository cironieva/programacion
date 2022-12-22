const { rejects } = require('assert');
const {readFile, read} = require('fs');

// FORMA INCORRECTA DE HACERLO

readFile('./data/first.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  
  console.log(data);
});


// CREAR UNA PROMESA

new Promise((resolve, reject) => {

});


// PONER EL CÓDIGO DENTRO DE LA PROMESA

new Promise((resolve, reject) => {
  readFile('./data/first.txt', 'utf-8', (err, data) => {
    if (err) reject(err);
    
    resolve(data);
  });
});

// Si el readFile encuentra un error, va a usar ese error como parámetro para el método reject
// Si no encuentra error, va a usar esa data como parámetro para el método resolve



// PARA CAMBIAR EL ARCHIVO QUE LEE: determinarlo en una función con un parámetro

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
      readFile(pathFile, 'utf-8', (err, data) => {
        if (err) reject(err);
        
        resolve(data);
      });
    });
}

getText('./data/second.txt')
  .then(result => console.log(result))    // Por si todo sale bien
  .catch(error => console.log(error));     // Por si todo sale mal
;


// ASYNC Y AWAIT    una sintaxis mejor para hacer lo mismo

// La palabra reservada async sirve para crear una función asíncrona, y el await para que funcione

async function reading() {
  const result = await getText('./data/third.txt');
  const result2 = await getText('./data/fourth.txt');

  console.log(result);
  console.log(result2);
}

reading();


// Para añadir una validación de error usar try catch(err)

async function reading() {
  try {
    const result = await getText('./data/third.txt');
  const result2 = await getText('./data/fourth.txt');

  console.log(result);
  console.log(result2);
  } catch(err) {
    console.log(err);
  }
}

reading();

// Si hay algún error dentro del try, automáticamente salta al catch y muestra el error