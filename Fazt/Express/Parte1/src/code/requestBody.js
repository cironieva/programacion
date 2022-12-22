const { text } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`server on port ${PORT}`);



app.use(express.text());                          // lee body request tipo texto
app.use(express.json());                          // lee body request tipo json
app.use(express.urlencoded({extended: false}));   // lee body request tipo form-encode


app.post('/user', (req, res) => {
  res.send('New user created');

  console.log(req.body);
});