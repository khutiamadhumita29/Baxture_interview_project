const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fileAnalysisSchema = new Schema({
   
    taskId: {
        type: 'objectId', 
        unique: true,
        required: true,
        select: false
    },
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "file",
        required: true
    },
    requestType: {
        type: String,
        required: true
    },
    result: {
        type: Object,
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