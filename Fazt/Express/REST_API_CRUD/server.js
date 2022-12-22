// REQUERIR TODO LO NECESARIO

const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');

// MONTAR EL SERVER

app.listen(PORT);
console.log(`Server on port ${PORT}`);

// USAR LOS MIDDLE WARES

app.use(morgan('dev'));

app.use(express.json());

// CREAR LA DATA BASE

let products = [
  {
    name: 'laptop',
    price: 3000,
    id : 1
  }
];

// CREAR EL ROUTING

// GET

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productFound = products.find(
    p => p.id === parseInt(req.params.id)
  );
  if (!productFound) return res.status(404).send('Product not found');

  res.json(productFound);
});


// POST

app.post('/products', (req, res) => {
  const newProduct = {...req.body, id: products.length + 1};
  products.push(newProduct);
  res.send(newProduct);
});


// PUT

app.put('/products/:id', (req, res) => {  
  
  const newData = req.body;

  const productFound = products.find(
    p => p.id === parseInt(req.params.id)
  );
  if (!productFound) return res.status(404).send('Product not found');

  products = products.map(p => p.id === parseInt(req.params.id)
  ? {...p, ...newData} : p);

  res.send('Product updated succesfully');
});


// DELETE

app.delete('/products/:id', (req, res) => {
  const productFound = products.find(
    p => p.id === parseInt(req.params.id)
  );
  if (!productFound) return res.status(404).send('Product not found');
  
  products = products.filter(p => p.id !== parseInt(req.params.id));

  res.sendStatus(204);
});