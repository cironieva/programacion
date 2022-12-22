// Módulo FileSystem

const fs = require('fs');

// Método readFileSync()  Lee archivos, primero indicar la ruta y luego el charset

const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt');

console.log(first);
console.log(second.toString());

// Método writeFileSync() Crea un archivo, priemro indicar la ruta y luego el contenido (puede ser una const)

fs.writeFileSync('./data/third.txt', 'regresé mundo');

const text = 'adiós definitivo mundo';

fs.writeFileSync('data/fourth.txt', text);

// Para agregar contenido en lugar de sobreescribir utilizar un tercer parámetro con un objeto flag

const extra = ' ...o eso pensaba'

fs.writeFileSync('data/fourth.txt', extra, {flag: 'a'});


// MÉTODOS ASINCRÓNICOS

// readFile()   Primero la ruta, luego el charset, luego la callback de errores y datos

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
  if (error) console.log(error);
  console.log(data);

  fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
    if (error) console.log(error);
    console.log(data);

    fs.readFile('./data/third.txt', 'utf-8', (error, data) => {
      if (error) console.log(error);
      console.log(data);

      fs.readFile('./data/fourth.txt', 'utf-8', (error, data) => {
        if (error) console.log(error);
        console.log(data);
      });
    });
  });
});

// Anidarlos así los hace funcionar de manera sincŕonica, si los pongo afuera, funcionan de manera asincrónica