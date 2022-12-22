// REQUIREMENTS
const express = require('express');
const app = express();

// SERVER INIT
const PORT = 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

// STATIC FILES
app.use(express.static('public'));


// SET VIEWS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// MIDDLEWARES


// ROUTING

// app.get('/', (req, res) => {
//   res.render('index', {text : 'This is EJS'});
// });

// app.get('/about', (req, res) => {
//   res.render('about', {text: 'Todo bien'});
// });

const home = require('./routes/home');
app.use(home);

const about = require('./routes/about');
app.use(about);


const {body, validationResult} = require('express-validator');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/register', [
  body('name', 'Ingrese un nombre y apellido')
    .exists()
    .isLength({min:5}),
  body('email', 'Ingrese un email válido')
    .exists()
    .isEmail(),
  body('edad', 'Ingrese un valor numérico')
    .exists()
    .isNumeric()
], (req, res) => {

});