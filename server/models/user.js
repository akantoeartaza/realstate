const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  github: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  skill: {
    type: String,
  },
  experience: {
    type: String,
  },
  education: {
    type: String,
  },
  profilePicPath: {
    type: String, 
  },
  designation: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
