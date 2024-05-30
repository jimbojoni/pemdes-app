const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
  const user = { name: 'John Doe' }; // Example user data
  res.render('index', { user });
});

module.exports = router;

