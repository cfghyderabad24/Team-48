const exp = require('express')
const imageApp = exp.Router();
const mongoose = require('mongoose');
const Grid = require('gridfs-stream')
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const crypto = require('crypto');
const path = require('path');
require('dotenv').config()

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
imageApp.use(bodyParser.json())
imageApp.use(methodOverride('_method'))
const conn = mongoose.createConnection(process.env.DB_URL)
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

let bucket;
conn.once('open', () => {
  bucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });
});


  const storage = new GridFsStorage({
    url: process.env.DB_URL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

  imageApp.post('/upload-image', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
  });

  imageApp.get('/get-images', async (req, res) => {
      console.log("Started")
      try {
        let files = await gfs.files.find().toArray();
        res.json({files})
    } catch (err) {
        res.json({err})
    }
  });

  imageApp.get('/get-images/:prefix', async (req, res) => {
    const prefix = req.params.prefix;
    try {
      // Connect to the GridFS files collection
      const filesCollection = conn.collection('uploads.files');
  
      // Find files that match the filename prefix
      const files = await filesCollection.find({ filename: { $regex: `^${prefix}` } }).toArray();
  
      if (files.length === 0) {
        return res.status(404).json({ error: 'No files found' });
      }
  
      // Set response headers for multipart content
      res.setHeader('Content-Type', 'multipart/mixed; boundary=--boundary');
  
      // Stream each file in series
      for (const file of files) {
        await new Promise((resolve, reject) => {
          const downloadStream = bucket.openDownloadStream(file._id);
  
          // Write boundary and headers for each file
          res.write(`--boundary\n`);
          res.write(`Content-Type: image/jpeg\n`);
          res.write(`Content-Disposition: inline; filename="${file.filename}"\n\n`);
  
          downloadStream.on('data', (chunk) => {
            res.write(chunk);
          });
  
          downloadStream.on('end', () => {
            res.write('\n');
            resolve();
          });
  
          downloadStream.on('error', (err) => {
            reject(err);
          });
        });
      }
  
      // Write final boundary
      res.write('--boundary--\n');
      res.end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });
  
  






module.exports = imageApp

