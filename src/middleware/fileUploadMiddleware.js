const multer = require('multer');
const path = require('path');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage,
  fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if(ext !== '.txt' ) {
        req.fileValidationError  = 'Only text files are allowed'
          return callback(null, false, req.fileValidationError)
      }
      callback(null, true)
  },
  limits:{
      fileSize: 1024 * 1024
  } });

module.exports = upload;
