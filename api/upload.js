const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const { v4 } = require("uuid");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../upload"));
  },
  filename: (req, file, cb) => {
    const { mimetype } = file;
    let extension = "";
    if (mimetype === "image/jpeg") {
      extension = ".jpg";
    }
    cb(null, v4() + extension);
  },
});

const uploadMdw = multer({
  storage: storage,
});

router.post("/", uploadMdw.single("file"), (req, res) => {
  res.send("/upload/" + req.file.filename);
});

module.exports = router;
