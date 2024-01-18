const fileModel = require('../models/fileModel')

const fileUpload = require('../middleware/fileUpload')

console.log(fileUpload,'fileUpload')

exports.uploadFile = async (req, res) => {
    try {
        console.log(req.body)
        // saveQuery
        res.status(200).json("");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


