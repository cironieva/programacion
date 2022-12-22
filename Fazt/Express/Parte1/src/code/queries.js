const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`server on port ${PORT}`);

app.get('/query', (req, res) => {
  console.log(req.query);
  res.sendStatus('204');
});

// las queries son objetos de JS que recibe el backend por la URL
// para enviar una query, en la URL escribir ?[nombre de la query]=[valor de la query]
// para enviar más de una query concatenar con &
// si a la misma query se le da dos valores diferentes se añaden a un array dentro del arreglo

app.get('/search', (req, res) => {
  if (req.query.q == 'javascript books') {
    res.send('JavaScript books list');
  } else {
    res.send('Not found');
  }
});

// si la query llamada 'q' coincide hacer tal cosa, si no, hacer tal otra