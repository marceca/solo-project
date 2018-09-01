const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./database/mongoose/mongoose.js');

// Controllers
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.get('/black-jack', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/black-jack.html'));
});

// Sign up
app.get('/sign-up', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/sign-up.html'));
});

app.post('/sign-up', (req,res) => {
  userController.signUp(req,res);
});

// Log in
app.get('/log-in', (req,res) => {
  res.sendFile(path.join(__dirname + '/templates/log-in.html'));
});

app.post('/log-in', (req,res) => {
  userController.login(req,res);
})



// Place bet
app.post('/place-bet', (req,res) => {
  gameController.placeBet(req,res);
})



app.listen(3000);