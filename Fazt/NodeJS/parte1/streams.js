const {writeFile} = require('fs/promises');

const createBigFile = async () => {
  await writeFile('./data/bigFile.txt', 'Hello World'.repeat(500000));
}

createBigFile();






const { createReadStream } = require('fs');

const stream = createReadStream('./data/bigFile.txt', 'utf-8'); // crea un objeto de evento llamado stream

stream.on('data', (chunk) => {
  console.log(chunk);                 // manda el archivo de a trozos, de a chunks
});

stream.on('end', () => {
  console.log('terminé de leer');     // el evento end se emite cuando el evento anterior termine
});

stream.on('error', (error) => {       // el evento error se emite solo si ocurre un error
  console.log('ocurrió algún error XD');
  console.log(error);
});