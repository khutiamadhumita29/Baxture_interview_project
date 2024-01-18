const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fileAnalysisSchema = new Schema({
    fileId: {
        type: Object,
        required: true
    },
    countWords: {
        type: Number,
        required: true
    },
    findTopKWords: {
        type: String,
        required: true
    },
    countUniqueWords: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }
});
const analysis = mongoose.model("analysis", fileAnalysisSchema);
module.exports = analysis;