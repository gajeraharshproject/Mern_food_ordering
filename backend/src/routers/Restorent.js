const router = require("express").Router();

const restorent_model = require("../Models/Restorentmodel")
const {CreateRestorent,RestorentLogin,getRestorendata} = require("../Controllers/Restorent")
const {CheckRestorentauth} = require("../Middlware/AuthRestorent")
const {uploderestoretnphoto} = require("../utility/Functions")
router.post("/CreateRestorent",uploderestoretnphoto.single("Restorentimage"),CreateRestorent);
router.post("/RestorentLogin",RestorentLogin)
router.get("/getRestorentdata:id",CheckRestorentauth,getRestorendata)





module.exports = router;