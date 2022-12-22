const http = require('http');
const {createReadStream} = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  
  const fileStream = createReadStream('./data/bigFile.txt', 'utf-8');

  fileStream.on('data', chunk => {
    fileStream.pipe(res);           // envía en la response la data por chunks
  });

  fileStream.on('error', error => {
    console.log(error);
  });

});

server.listen(PORT);
console.log(`server on port ${PORT}`);