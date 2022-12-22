const express = require('express');
const app = express();
const path = require('path');

app.set('port', 3000);
app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);

// Middle ware
app.use(express.static(path.join(__dirname, 'public')));


// Routing
app.get('/root', (req, res) => {
  res.sendFile('../public/index.html');
});


app.get('/user', (req, res) => {
  res.send('user')
})