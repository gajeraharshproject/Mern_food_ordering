const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const FoodItem_Schema = new mongoose.Schema({

    Parent_restorent_id: {
        type: ObjectId,
        ref: "Restorents",
        requried: true
    },
    Parent_restorent_Name: {
        type: String,
        required: true
    },
    FoodName: {
        type: String,
        required: true
    },
    FoodDesccripsion:{
        type:String,
        requried:true
    },
    Foodquintity:{
        type:Number,
        default:3
    },
    FoodPrice:{
        type:Number,
        requried:true
    },
    Fooddiscount:{
        type:String,
      
    },
    FoodReview:[
        {
           type:String,
           FoodReviewBy:{
               type:ObjectId,
               ref:"user"
           }
        }
    ],
    FoodImage:{
        type:String,
        required:true
    },
    FoodFivestareRating:{
        type:Number,
    }



}, { timestamps: true });



const FoodItem_model = new mongoose.model("FoodItems",FoodItem_Schema);
module.exports = FoodItem_model;
