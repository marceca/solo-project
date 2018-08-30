const mongoose = require('mongoose');
const User = require('./mongoose-model.js');
mongoose.connect('mongodb://MichaelMarceca:sk1TTl3s1@ds237932.mlab.com:37932/black-jack-app')

mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ORM - mongodb-orm');
});


module.exports = mongoose;