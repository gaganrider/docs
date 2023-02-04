// uploading files using multer
// npm i multer

// uploading images
// write in multer.js or you can just paste it 
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");// path where the images will be stored after uploding you can change it as per your requirments
    },
    filename: function (req, file, cb) {
        let modifiedName =
            file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, modifiedName);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        let filetypes = /jpeg|jpg|png|gif/;
        let mimetype = filetypes.test(file.mimetype);
        let extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(
            "Error: File upload only supports the following filetypes - " +
                filetypes
        );
    },
})


.single("avatar");//to upload only one image at a time avatar will be the name of your image with some extra data
.fields([{ name: 'image1'}, { name: 'image2'},{ name: 'image3'}]);//to upload multiple images at once image1 image2 image3 will be the name of your images with some extra data

// write only one of them
// req.file will hold the data when uploading single
// you can use req.files['image1'] when uploading multiple

module.exports = upload;



// write in index.js
const upload = require("./multer");
const uuid = require("uuid").v4;
const fs = require("fs");
const path = require("path");


Router.post('/signup',upload('avatar'),(req,res)=>{
   
   // req.file will hold the data when uploading single

})

