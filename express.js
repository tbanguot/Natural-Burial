const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let serverData = {}; // Global variable to hold the uploaded/downloaded data

// Endpoint to handle data upload
app.post('/upload', (req, res) => {
    serverData = req.body;
    res.status(200).send('Data uploaded successfully');
});

// Endpoint to handle data download
app.get('/download', (req, res) => {
    res.status(200).json(serverData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});