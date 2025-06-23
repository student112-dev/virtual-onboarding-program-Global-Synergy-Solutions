const express = require('express');
const router = express.Router();
const { getAllUsers, getAllFeedback, getProgress } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');

router.get('/users', auth, getAllUsers);
router.get('/feedbacks', auth, getAllFeedback);
router.get('/progress', auth, getProgress);

module.exports = router;
