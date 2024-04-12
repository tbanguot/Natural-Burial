// Server.js
const express = require('express');
const app = express();
const PORT = 3026;

// Use express.json() to parse JSON bodies into JS objects
app.use(express.json());

// Global data storage
let data = {
  "Name": "John Doe",
  "SelectedOption": "FirstOption" // Default radio button value
};

// Route to handle data upload
app.post('/upload', (req, res) => {
  data = req.body;
  res.status(200).send({ message: "Data uploaded successfully." });
});

// Route to handle data download
app.get('/download', (req, res) => {
  res.status(200).send(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
