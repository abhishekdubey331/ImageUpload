let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/main_controller');
let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads'); // set the destination
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // set the file name and extension
    }
});

let upload = multer({storage: storage});

router.post('/upload_small', upload.single('upl'), function (req, res) {
    userCtrl.uploadSmall(req, res);
});


router.get('/get_images', (req, res) =>

    userCtrl.getAllImages(req, res)
);
module.exports = router;
