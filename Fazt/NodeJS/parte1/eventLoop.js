setTimeout(()=>console.log('first'), 0);
console.log('second');
console.log('third');




const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('welcome to the server');
    return res.end();
  }

  if (req.url === '/about') {
    
    for (i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }

    return res.end('about page');
  }

  res.end('Not Found');
});

server.listen(PORT);

console.log('server listening on port', PORT);