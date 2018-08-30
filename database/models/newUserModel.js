const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUserSchema = new Schema ({
  username: String,
  password: String
})

const newUser = mongoose.model('newUser', newUserSchema);

module.exports = newUser;