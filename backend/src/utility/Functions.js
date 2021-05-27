const multer = require("multer")
const path = require("path")

const restorentphotouplodedestination = multer.diskStorage({
        destination:"uplodes/Restorent/",
        filename:function(req,file,cb){
            cb(null,Date.now() + path.extname(file.originalname));
        }

})

exports.uploderestoretnphoto = multer({
    storage:restorentphotouplodedestination,
    limits:{fileSize:1000000}
});

const fooditemuplodedestination = multer.diskStorage({
    destination:"uplodes/product/",
    filename:function(req,file,cb) {
        cb(null,Date.now() + path.extname(file.originalname));
    }
})

exports.uplodefooditem = multer({
    storage:fooditemuplodedestination
})