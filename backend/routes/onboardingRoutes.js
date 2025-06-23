const express = require('express');
const router = express.Router();
const { getSchedule } = require('../controllers/onboardingController');
const auth = require('../middleware/authMiddleware');

router.get('/schedule', auth, getSchedule);

module.exports = router;
