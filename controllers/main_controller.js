let Image = require('../models/model_image');
let connection = require('../connection');
let Uploader = require('s3-image-uploader');
let base_url = 'https://s3-us-west-2.amazonaws.com/sample212121/';   //Change Bucket Name Here
const uploadsFolder = 'uploads';
const fs = require('fs');
let uploader = new Uploader({
    aws: {
        key: "key1",
        secret: "key2"
    }
});

module.exports.uploadSmall = function (req, res) {

    fs.readdir(uploadsFolder, (err, files) => {
        files.forEach(file => {
            uploader.upload({
                    fileId: 'someUniqueIdentifier',
                    bucket: 'sample212121',
                    source: 'uploads/' + file,
                    name: file
                },
                function (data) { // success
                    console.log('upload success:', data);

                    Image.create({
                        small_url: base_url + file,
                    })
                        .then((savedReq) => {
                            console.log(savedReq);

                        });
                },
                function (errMsg, errObject) { //error
                    console.error('unable to upload: ' + errMsg + ':', errObject);
                    // execute error code
                });
        });
    })

};

module.exports.getAllImages = function (req, res) {


    Image.find({})
        .exec()
        .then((image) => {
            if (!image) {
                return res.status(404).json({
                    status: 400,
                    message: "User not found"
                });
            }
            else
                res.json(image);
        });

};

