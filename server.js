const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/mongoose/mongoose.js');

app.use(express.static('static'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.get('/black-jack', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/black-jack.html'));
});

app.listen(3000);