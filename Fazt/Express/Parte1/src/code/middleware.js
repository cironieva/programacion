const express = require('express');
const app = express();
const PORT = 3000;

const morgan = require('morgan');

app.listen(PORT);
console.log(`server on port ${PORT}`);

app.use('/profile' ,(req, res, next) => {
  console.log('user was here');
  console.log(`url: ${req.url}, method: ${req.method}`);

  next();
});

app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('user was here');
//   console.log(`url: ${req.url}, method: ${req.method}`);

//   next();
// });

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/profile', (req, res) => {
  res.send('profile');
});



app.use((req, res, next) => {
  if (req.query.user === 'fazt@faztweb.com') {
    next();
  } else {
    res.send('Not authorized');
  }
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard page');
});







app.get('/morgan', (req, res) => {
  res.send('Morgan')
});