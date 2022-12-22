// Requirements
const express = require('express');
const app = express();
const morgan = require('morgan');


// Settings
app.set('appName', 'Express course');
app.set('port', 3000);
app.set('case sensitive routing', true);


// Server init
app.listen(app.get('port'));
console.log(`${app.get('appName')} on port ${app.get('port')}`);


// Middle wares
app.use(express.json());
app.use(morgan('dev'));


// Routes