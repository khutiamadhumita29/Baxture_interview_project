const File = require('../models/fileModel')
const analysis = require('../models/analysisModel')
let fs = require('fs')
let mongoose = require('mongoose')
exports.uploadFile = async (req, res) => {
    try {
        let fileData = req.file
        if (req.fileValidationError) return res.status(400).json({ success: false, error: req.fileValidationError })
        if (!fileData) return res.status(400).json({ success: false, error: 'No Document Uploaded' });

        // saveQuery
        let newFile = new File({
            ...fileData,
            fileName: fileData.originalname,
        })
        let result = await newFile.save()
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error', result: [] });
    }
}


exports.fileAnalysis = async (req, res) => {
    try {
        // fetch query if file exists 
        let result = await File.findOne({ _id: req.body.id })
        if (!result) return res.status(404).json({ success: false, error: 'No record Found', result: [] });
        // read file 
        let fileData = fs.readFileSync(result.path, 'utf8')
        let queryParams = req.query.action
        const returnResult = await getfileDataBasedOnValues(queryParams, fileData, req.body)
        res.status(200).json({ success: true, taskId: returnResult.taskId });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error', result: [] });
    }
}


exports.getAnalysisResult = async (req, res) => {
    try {
        // fetch query if file exists 

        let { taskId } = req.query
        if (!taskId) return res.status(404).json({ success: false, error: 'No QueryParmas Found', result: [] });
        let result = await analysis.findOne({ taskId: taskId })
        if (!result) return res.status(404).json({ success: false, error: 'No record Found', result: [] });
        // read file 
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error', result: [] });
    }
}



const getfileDataBasedOnValues = (reqType, fileData, body) => {
    let { id, wordName } = body
    let fileDataWithoutNewLines = fileData.replace(/(\r\n|\n|\r)/gm, " ");
    let uniqueData = [];
    let words = fileDataWithoutNewLines.toLowerCase().split(' ');
    let uniqueWords = {};
    words.forEach(word => {
        uniqueWords[word] = (uniqueWords[word] || 0) + 1;
    });
    let queryObject = {}
    switch (reqType) {
        case 'countWords':
            queryObject = new analysis({
                taskId: new mongoose.Types.ObjectId(),
                fileId: id,
                requestType: reqType,
                result: { totalWords: words.length }
            })
            break;
        case 'countUniqueWords':
            queryObject = new analysis({
                taskId: new mongoose.Types.ObjectId(),
                fileId: id,
                requestType: reqType,
                result: { uniqueWordLength:Object.keys(uniqueWords).length }
            })
            break;
        case 'findTopKWords':
            queryObject = new analysis({
                taskId: new mongoose.Types.ObjectId(),
                fileId: id,
                requestType: reqType,
                result: { wordName, count: uniqueWords[wordName] }
            })

            break;

    }
    let result = queryObject.save()
    return result
}