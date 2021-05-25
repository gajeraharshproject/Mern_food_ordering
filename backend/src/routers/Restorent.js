const router = require("express").Router();

const restorent_model = require("../Models/Restorentmodel")

const {CreateRestorent} = require("../Controllers/Restorent")
const {uploderestoretnphoto} = require("../utility/Functions")
router.post("/CreateRestorent",uploderestoretnphoto.single("Restorentimage"),CreateRestorent);







module.exports = router;