const {readFile} = require('fs');
const {promisify} = require('util');

const readFilePromise = promisify(readFile);    // convierte a la función readFile en una promesa

async function read() {
  const result1 = await readFilePromise('./data/first.txt', 'utf-8');
  const result2 = await readFilePromise('./data/second.txt', 'utf-8');
  const result3 = await readFilePromise('./data/third.txt', 'utf-8');
  const result4 = await readFilePromise('./data/fourth.txt', 'utf-8');

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
}

read();

// PARA AHORRAR CÓDIGO: hay una carpeta dentro del módulo fs que contiene a sus métodos pero ya convertidos a promesas


const {readFile} = require('fs/promises');

async function read() {
  const result1 = await readFile('./data/first.txt', 'utf-8');
  const result2 = await readFile('./data/second.txt', 'utf-8');
  const result3 = await readFile('./data/third.txt', 'utf-8');
  const result4 = await readFile('./data/fourth.txt', 'utf-8');

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
}