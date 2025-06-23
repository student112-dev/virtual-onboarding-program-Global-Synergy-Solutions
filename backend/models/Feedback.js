const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  feedbackText: String,
  rating: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
