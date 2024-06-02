// routes/index.js
const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/penduduk', (req, res) => {
  res.render('penduduk');
});

router.get('/surat-form', (req, res) => {
  res.render('surat-form');
});

module.exports = router;