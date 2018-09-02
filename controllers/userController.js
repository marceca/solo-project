const newUser = require('../database/models/newUserModel')
const fetch = require('node-fetch');


const userController = {};


userController.signUp = (req,res) => {
  let {
    username,
    password,
    credits
  } = req.body;

  newUser.create({
    username,
    password,
    credits
  }, (err, response) => {
    if(err) console.log(err)
    else {
      res.locals.id = response._id
      res.cookie('LoggedIn', username);
      res.cookie('Credits', 5000)
      res.redirect('/black-jack');
    }
  })
}

userController.login = (req,res) => {
  let { 
    username,
    password
  } = req.body;

  newUser.findOne({username}, (err, user) => {
    if(user !== null){
      if(password === user.password) {
        res.cookie('LoggedIn', user.username);
        res.cookie('Credits', user.credits)
        res.redirect('/black-jack');
      }
    } else {
      res.redirect('/sign-up')
    }
  })
}


module.exports = userController;