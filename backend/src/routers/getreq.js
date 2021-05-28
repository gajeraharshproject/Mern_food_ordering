const router = require("express").Router()
const FoodItem_model = require("../Models/FoodItemmodel");



router.get("/getfooditem:id", async (req,res) => {
    const {id} = req.params;
    
    try {
        const respones = await FoodItem_model.find({Parent_restorent_id:id});
        if(!respones) return res.json({msg:"no product avalible",success:false,data:respones })
        return res.status(200).json({data:respones,success:true})
    } catch (error) {
         console.log(error)
    }
})









module.exports = router