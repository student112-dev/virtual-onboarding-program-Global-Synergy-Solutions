const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const {
  getAllUsers,
  getAllFeedback,
  getProgress
} = require('../controllers/adminController');

const Progress = require('../models/Progress');
const Feedback = require('../models/Feedback');

// GET: All users (for admin dashboard)
router.get('/users', auth, getAllUsers);

// GET: All feedbacks
router.get('/feedbacks', auth, getAllFeedback);

// GET: All progress records
router.get('/progress', auth, getProgress);

// POST: Submit progress (Mark week completed)
router.post('/progress', auth, async (req, res) => {
  try {
    const { week, completed } = req.body;

    // Check for duplicate entries
    const exists = await Progress.findOne({
      userId: req.user.id,
      week
    });

    if (exists) {
      return res.status(400).json({ message: 'Progress already submitted for this week' });
    }

    const progress = await Progress.create({
      userId: req.user.id,
      week,
      completed
    });

    res.status(201).json(progress);
  } catch (err) {
    console.error('Progress submission error:', err);
    res.status(500).json({ error: 'Server error while submitting progress' });
  }
});

// POST: Submit feedback
router.post('/feedbacks', auth, async (req, res) => {
  try {
    const { feedbackText, rating } = req.body;

    const feedback = await Feedback.create({
      userId: req.user.id,
      feedbackText,
      rating
    });

    res.status(201).json(feedback);
  } catch (err) {
    console.error('Feedback submission error:', err);
    res.status(500).json({ error: 'Server error while submitting feedback' });
  }
});

module.exports = router;
