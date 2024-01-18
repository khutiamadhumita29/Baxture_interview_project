const express = require('express');
const fileController = require('../controller/fileController')
let router = express.Router();

router.post('/fileupload', fileController.uploadFile)

module.exports = router