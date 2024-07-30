const express = require('express');
const path = require('path');
const app = express();

// Load car data
const cars = require('./data/cars.json');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get car data
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
