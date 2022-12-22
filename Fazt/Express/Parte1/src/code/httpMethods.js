const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT);
console.log(`server on port ${PORT}`);

app.get('/products', (req, res) => {
  res.send('product list');
});

app.post('/products', (req, res) => {
  res.send('creating products');
});

app.put('/products', (req, res) => {
  res.send('updating a product');
});

app.delete('/products', (req, res) => {
  res.send('deleting a product');
});

app.patch('/products', (req, res) => {
  res.send('updating part of a product');
});