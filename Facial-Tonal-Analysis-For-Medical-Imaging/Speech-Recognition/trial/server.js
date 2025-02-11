const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure multer to save files with custom filenames and extensions
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory for file storage
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `audio_${uniqueSuffix}.wav`); // Save as .wav file
  }
});

const upload = multer({ storage: storage });

// Serve the frontend
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle audio upload
app.post('/upload', upload.single('audio'), (req, res) => {
  console.log(`Audio file saved as: ${req.file.filename}`);
  res.send(`Audio saved successfully as ${req.file.filename}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
