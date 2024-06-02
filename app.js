// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const appRoutes = require('./routes/index');
const documentRoutes = require('./routes/document');
const ejs = require('ejs-locals'); // Import ejs-locals

// Configure Express to use ejs-locals
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded
app.use(bodyParser.json()); // Add this line to parse JSON bodies

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.engine('ejs', ejs);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pemdes-db', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database');
});

// Routes
app.use('/', appRoutes);
app.use('/penduduk', appRoutes);
app.use('/api/penduduks', apiRoutes);
app.use('/document', documentRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
