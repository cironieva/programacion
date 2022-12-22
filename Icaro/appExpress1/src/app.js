const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log('escuchando en el puerto'+ PORT));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/product.html'));
});

app.get('/product/1', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/product_1.html'));
});

app.get('/product/2', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/product_2.html'));
});

app.get('/product/3', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/product_3.html'));
});
