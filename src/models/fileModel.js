const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fileSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false
  },
  uploadDate: {
    type: Date,
    required: true,
    default: new Date()
  }
});
const file = mongoose.model("file", fileSchema);


module.exports = file;