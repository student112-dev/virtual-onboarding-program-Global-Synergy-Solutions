const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'employee' }, // 'employee' or 'admin'
  timezone: String,
  language: String
});

module.exports = mongoose.model('User', UserSchema);
