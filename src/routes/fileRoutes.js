const express = require('express');
const fileController = require('../controller/fileController')
let router = express.Router();
let upload = require('../middleware/fileUploadMiddleware')
router.post('/fileupload', upload.single('file'), fileController.uploadFile)
router.post('/fileAnalysis',fileController.fileAnalysis)
router.get( '/fileAnalysis',fileController.getAnalysisResult)
module.exports = router