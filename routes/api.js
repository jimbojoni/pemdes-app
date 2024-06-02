// routes/api.js
const express = require('express');
const router = express.Router();
const Penduduk = require('../models/penduduk'); // Import the Penduduk model

// Get all penduduk
router.get('/', async (req, res) => {
  try {
    const penduduks = await Penduduk.find({});
    res.json(penduduks);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Add new penduduk
router.post('/', async (req, res) => {
  try {
    const newPenduduk = new Penduduk(req.body);
    await newPenduduk.save();
    res.status(201).json(newPenduduk);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Update a penduduk
router.put('/:id', async (req, res) => {
  try {
    const updatedPenduduk = await Penduduk.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPenduduk);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a penduduk
router.delete('/:id', async (req, res) => {
  try {
    await Penduduk.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;