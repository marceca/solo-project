const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname + '/styles')));

app.get('/assets/styles/main.css', (req,res) => {
  res.sendFile(path.join(__dirname + '/assets/styles/main.css'))
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/black-jack', (req,res) => {
  res.sendFile(path.join(__dirname + '/html/black-jack.html'));
});

app.listen(3000);