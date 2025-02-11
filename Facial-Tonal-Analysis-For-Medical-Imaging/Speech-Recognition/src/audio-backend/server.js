const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `recording_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("video"), (req, res) => {
  res.status(200).json({ message: "Video uploaded successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
