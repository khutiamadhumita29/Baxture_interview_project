const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fileSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: false
  },
  uploadDate: {
    type: Date,
    required: true,
    default: new Date()
  }
});
const fileModel = mongoose.model("fileModel", fileSchema);
module.exports = fileModel;