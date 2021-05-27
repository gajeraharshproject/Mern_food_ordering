const router = require("express").Router();

const restorent_model = require("../Models/Restorentmodel")

const {CreateRestorent,RestorentLogin} = require("../Controllers/Restorent")
const {uploderestoretnphoto} = require("../utility/Functions")
router.post("/CreateRestorent",uploderestoretnphoto.single("Restorentimage"),CreateRestorent);
router.post("/RestorentLogin",RestorentLogin)






module.exports = router;