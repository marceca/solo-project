const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('static'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.get('/black-jack', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/black-jack.html'));
});

app.listen(3000);