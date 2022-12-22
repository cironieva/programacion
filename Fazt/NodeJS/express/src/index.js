import express from 'express';        // importar express

const app = express();                // guardar la función express en la constante app

app.listen(3000);                     // definir el puerto en el que se escucha
console.log('server on port 3000');   // avisar por consola que está escuchando

app.get('/', (req, res) => {          // cuando entre a la ruta /
  res.send('<h1>Home</h1>');          // hacer esto
});

app.get('/about', (req, res) => {     // cuando entre a la ruta /about
  res.send('<h1>About</h1>');         // hacer esto
});