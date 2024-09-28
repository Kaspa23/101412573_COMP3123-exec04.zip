const express = require('express');
const app = express();
const port = 3000;

// Root route to handle requests to "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Express JS application!');
});

// GET /hello route
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET /user route with query parameters
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Pritesh';
  const lastname = req.query.lastname || 'Patel';
  res.json({ firstname, lastname });
});

// POST /user route with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

