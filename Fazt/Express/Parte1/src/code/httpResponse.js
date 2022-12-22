const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`server on port ${PORT}`);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/myFile', (req, res) => {
  res.sendFile('./expressJs.png', {root: __dirname});
});

app.get('/user', (req, res) => {
  res.json({
    "name": "Ciro",
    "lastname": "Nieva",
    "age": 19,
    "points": [1, 2, 3],
    "adress": {
      "city": "Córdoba",
      "street": "La Pampa 1871"
    }
  });
});

app.get('/isAlive', (req, res) => {
  res.sendStatus(204);
});