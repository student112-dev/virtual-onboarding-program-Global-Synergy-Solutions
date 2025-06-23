const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ✅ Register new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, timezone, language } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'employee', // default to employee
      timezone,
      language
    });

    // Return safe user data (no password)
    const userSafe = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      timezone: newUser.timezone,
      language: newUser.language
    };

    res.status(201).json(userSafe);
  } catch (err) {
    console.error('Registration Error:', err.message);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

// ✅ Login user and issue JWT
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Sign JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Return token and safe user data
    const userSafe = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      timezone: user.timezone,
      language: user.language
    };

    res.json({ token, user: userSafe });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ error: 'Server error during login' });
  }
};
