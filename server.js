const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: 'uploads/', // Define where to store uploaded files
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueName + ext);
  },
});

const upload = multer({ storage });

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const fileURL = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
  res.status(200).send(fileURL);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
