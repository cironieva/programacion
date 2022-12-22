// SERVIDOR CON EXPRESS

const express = require('express');                         // requiero express

const app = express();                                      // declaro la app

app.listen(3000);                                           // pongo al puerto en escucha
console.log('server on port 3000');                         // aviso por consola

app.get('/hello', (req, res) => {                           // app.get() dice qué debe hacer la app cuando la url coincida con el primer parámetro
  res.send('Hello World');                                  // res.send() le dice al response qué enviar al client
});

app.get('/', (req, res) => {                                  
  res.sendFile('./static/index.html', {root: __dirname});   // res.sendFile envía un archivo. Indicar {root: __dirname} porque si no tira error
});

app.use((req, res) => {                                     // para todas las rutas que no existan
  res.status(404).send('Not Found');                        
});