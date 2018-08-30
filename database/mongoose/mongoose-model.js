const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://MichaelMarceca:sk1TTl3s1@ds237932.mlab.com:37932/black-jack-app')

const userSchema = new Schema ({
  id: Number,
  name: String,
  lastNamae: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;