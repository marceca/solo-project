const newUser = require('../database/models/newUserModel')
const fetch = require('node-fetch');


const userController = {};


userController.signUp = (req,res) => {
  let {
    username,
    password
  } = req.body;

  newUser.create({
    username,
    password
  }, (err, response) => {
    if(err) console.log(err)
    else {
      res.locals.id = response._id
      res.redirect('/');
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
      if(req.body.password === user.password) {
        res.cookie('Logged in', 'True');
        res.redirect('/');
      }
    } else {
      res.redirect('/sign-up')
    }
  })
}


module.exports = userController;