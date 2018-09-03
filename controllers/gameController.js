const newUser = require('../database/models/newUserModel')
const game = {};

game.placeBet = (req,res) => { 
  let val = req.body.value;
  // Get current user from cookies
  let username = req.cookies.LoggedIn;
  // Find current user in DB
  newUser.findOne({username}, (err, user) => { 
    // Update current user credits
    user.credits = user.credits - val;
    res.cookie('Credits', user.credits)
    // Save current user credits
    user.save(function(err, updatedUser) {
    });
  });
}

game.getNewCookies = (req,res) => {
  // Get current user from cookies
  let username = req.cookies.LoggedIn;
  // Find current user in DB
  newUser.findOne({username}, (err, user) => { 
    // Reset credits cookie to current amount
    if(user) {
      res.cookie('Credits', user.credits)
    }
    res.send();
  });  
}

game.playerWon = (req,res) => {
  let username = req.cookies.LoggedIn;
  newUser.findOne({username}, (err, user) => { 
    // Add winning amount to current credits
    if(user) {
      user.credits = parseInt(user.credits) + (parseInt(req.body.value) * 2);
      user.save();
    }
    res.send();
  });
}

game.playerPush = (req,res) => {
  let username = req.cookies.LoggedIn;
  // Add wager amount to current credits
  newUser.findOne({username}, (err, user) => { 
    if(user) {
      user.credits = parseInt(user.credits) + parseInt(req.body.value);
      user.save();
    }
  res.send();
  });
}

module.exports = game;