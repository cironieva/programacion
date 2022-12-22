const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`server on port ${PORT}`);

app.get('/hello/:username', (req, res) => {
  console.log(req.params);
  console.log(req.params.username);
  res.send(`Hello ${req.params.username} <br> Hola ${req.params.username.toUpperCase()} en mayúsculas`);
  // los request params son SIEMPRE STRINGS, luego se los puede parsear, cambiar a mayúscula, etc
});


app.get('/add/:x/:y', (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);
  const result = x + y;

  res.send(`Result: ${result}`)
});


app.get('/users/:username/photo', (req, res) => {
  if (req.params.username == 'ciro') {
    return res.sendFile('./expressJs.png', {
      root: __dirname
    });
  }
  res.send('User not found');
});


app.get('/name/:name/age/:age', (req, res) => {
  res.send(
    `Name: ${req.params.name}
    Age: ${req.params.age}`
    );
});