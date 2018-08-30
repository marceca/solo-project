const mongoose = require('mongoose');
mongoose.connect('mongodb://Michael:sk1TTl3s1@ds237932.mlab.com:37932/black-jack-app', { useNewUrlParser: true })


module.exports = mongoose;