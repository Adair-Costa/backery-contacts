const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: [true, 'Please provide your address'],
  },
  message: {
    type: String,
    required: [true, 'Please explain your message'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
