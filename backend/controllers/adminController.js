const User = require('../models/User');
const Feedback = require('../models/Feedback');
const Progress = require('../models/Progress');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.getAllFeedback = async (req, res) => {
  const feedbacks = await Feedback.find().populate('userId', 'name email');
  res.json(feedbacks);
};

exports.getProgress = async (req, res) => {
  const progress = await Progress.find().populate('userId', 'name email');
  res.json(progress);
};
