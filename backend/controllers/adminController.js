const User = require('../models/User');
const Feedback = require('../models/Feedback');
const Progress = require('../models/Progress');

// ✅ Get all registered users (without passwords)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Server error while fetching users' });
  }
};

// ✅ Get all feedback with user name and email
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .populate('userId', 'name email');
    res.json(feedbacks);
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    res.status(500).json({ error: 'Server error while fetching feedbacks' });
  }
};

// ✅ Get all progress with user name and email
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find()
      .populate('userId', 'name email');
    res.json(progress);
  } catch (err) {
    console.error('Error fetching progress:', err);
    res.status(500).json({ error: 'Server error while fetching progress' });
  }
};
