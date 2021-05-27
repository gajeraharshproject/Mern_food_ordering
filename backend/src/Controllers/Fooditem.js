const FoodItem_model = require("../Models/FoodItemmodel");
const fooditem_model = require("../Models/FoodItemmodel")
const fs = require("fs");



exports.CreateFooditem = async (req,res) => {
    const {
        FoodName,
        FoodDesccripsion,
        Foodquintity,
        FoodPrice,

    } = req.body;
    const FoodImage = req.file.filename;

    if(!FoodName || !FoodDesccripsion || !FoodPrice ){
        return res.status(400).json({msg:"plase Enter all Details",success:false})
    }
 try {
     const addfooditem = new fooditem_model({
        Parent_restorent_id: req.Restorent._id,
        Parent_restorent_Name: req.Restorent.RestorentName,
         FoodName,
         FoodDesccripsion,
         Foodquintity,
         FoodPrice,
         FoodImage
     })
     const save_fooditem = await addfooditem.save()
     if(!save_fooditem){
         return res.status(500).json({msg:"Please Try Again",success:false})
     }
     return res.status(200).json({msg:"data Addeed",success:true,data:save_fooditem })
 } catch (error) {
     console.log(error)
 }

}




exports.deletefooditem  = async (req,res) => {
    const {id} = req.params;
     if(!id) return res.status(500).json({msg:"parameter not define ",success:false})

     try {
         const checkrestorent = await FoodItem_model.findById(id);
        console.log(checkrestorent.Parent_restorent_id);
        console.log(req.Restorent._id)
        
         
         const deletefood = await fooditem_model.findByIdAndDelete(id);
         if(!deletefood) return res.status(400).json({
             msg:"Plase try again",
             success:false
         });
         
        fs.unlink(`uplodes/product/${deletefood.FoodImage}`,(error) => {
             if (error) console.log(error)
             res.status(200).json({
                 msg:"your food item deleted",
                 success:true,
                 data:deletefood
             })
        })

     } catch (error) {
         console.log(error)
     }
}



exports.updatefooditem = async (req,res) => {
    const {
        RestorentName,
        RestorentType,
        RestorentOvnerName,
        RestorentState,
        RestorentArea,
        RestorentAreaPincode,
        RestorentOvnerPhone,
        RestorentOvnerEmail,
        Restorenopentime,
        RestorentPassword,
    } = req.body;
    const {id} = req.params;
    const RestorentImage = req.file.filename;
    try {
        const findfooditem = await fooditem_model.findById(id);
        if(!findfooditem){
            return res.status(400).json({msg:"your food allready deleted ",success:false})
        }
        //uppae food item 
        const updateddata = await fooditem_model.findByIdAndUpadate(id,{
            RestorentName,
            RestorentType,
            RestorentOvnerName,
            RestorentState,
            RestorentArea,
            RestorentAreaPincode,
            RestorentOvnerPhone,
            RestorentOvnerEmail,
            Restorenopentime,
            RestorentPassword,
            RestorentImage
        },{
            new:true
        });

        if(!updateddata) {
            return res.status(400).json({msg:"Please Try Again",success:false})
        }
        
        return res.status(200).json({msg:"your data has bin updated ",success:true,data:updateddata})

    } catch (error) {
        console.log(error);
    }
}