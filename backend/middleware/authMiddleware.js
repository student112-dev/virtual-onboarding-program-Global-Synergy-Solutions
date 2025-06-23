const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request for use in routes/controllers
    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();
  } catch (err) {
    console.error('JWT Verification Error:', err.message);
    res.status(400).json({ message: 'Invalid token' });
  }
};
