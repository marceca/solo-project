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
  if(req.cookies.LoggedIn) {
    res.sendFile(path.join(__dirname + '/templates/black-jack.html'));
  } else {
    res.redirect('/sign-up');
  }
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

// Player won
app.post('/player-won', (req,res) => {
  gameController.playerWon(req,res);
})

// Player push
app.post('/player-push', (req,res) => {
  gameController.playerPush(req,res);
})

// Reset cookies
app.post('/get-new-cookies', (req,res) => {
  gameController.getNewCookies(req,res);
});


app.listen(3000);