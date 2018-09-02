const newUser = require('../database/models/newUserModel')
const game = {};

game.placeBet = async (req,res) => { 
  // Gets value from key -- comes in as -- { '{"value":25}': '' }
  // For some reason ajax data is coming in the key of body
  let obj = Object.keys(req.body);
  // Uses RegEx to get the value of value
  let val = obj[0].match(/\d+/);
  // Get current user from cookies
  let username = req.cookies.LoggedIn;
  // Find current user in DB
  newUser.findOne({username}, (err, user) => { 
    // Update current user credits
    user.credits = user.credits - val[0];
    // Save current user credits
    user.save(function(err, updatedUser) {
    });
  });
}




module.exports = game;