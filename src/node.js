const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        cb(null, 'upload/')
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    res.send({ message: 'File uploaded successfully.', file: req.file });
});
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const directoryPath = __dirname + "/upload/";
  res.download(directoryPath + filename, filename, (err) => {
      if (err) {
          res.status(500).send({
              message: "Could not download the file. " + err,
          });
      }
  });
});

app.use('/upload', express.static('upload'));

app.listen(port, () => {
  console.log(`⁠ Server is running on ${port}`);
});
