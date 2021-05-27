const router = require("express").Router();
const {CheckRestorentauth} = require("../Middlware/AuthRestorent")
const {uplodefooditem} = require("../utility/Functions")
const {CreateFooditem,deletefooditem,updatefooditem} = require("../Controllers/Fooditem")

router.post("/Addfood",CheckRestorentauth,uplodefooditem.single("fooditemimage"),CreateFooditem);
router.delete("/delerefooditem:id",CheckRestorentauth,deletefooditem);
router.put("/updatefooitem:id",CheckRestorentauth,uplodefooditem.single("fooditemimage"),updatefooditem);


module.exports = router