// Requirements
const express = require('express');
const app = express();
const path = require('path');
require('ejs');


// Settings
app.set('port', 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Server init
app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);


// Middleware
app.use(express.static(path.join(__dirname, './static')));


// Routing
app.get('/', (req, res) => {
  res.sendFile('./static/index.html');
});

app.get('/ejs', (req, res) => {
  
  const title = 'Mi primer EJS';
  
  let isActive = false;

  res.render('index', {title}, {isActive});
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});


// Requerir las otras rutas

const userRoutes = require('./routes/users');

// Usar las rutas requeridas

app.use(userRoutes);