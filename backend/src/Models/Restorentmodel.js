const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const {ObjectId} = mongoose.Schema.Types;
const jwt = require("jsonwebtoken")
const Restorent_schema = new mongoose.Schema({

    RestorentName:{
        type:String,
        required:true
    },
    RestorentType:{
        type:String,
        required:true
    },
    RestorentOvnerName:{
        type:String,
        requried:true
    },
    RestorentState:{
        type:String,
        required:true
    },
    RestorentArea:{
        type:String,
        required:true
    },
    RestorentAreaPincode:{
        type:String,
        required:true
    },
    RestorentPopularity:{
        type:Number,
    },
    RestorentReview:[{
        type:String,
        ReviewBy:{
            type:ObjectId,
            ref:"user"
        }
    }],
    RestorentOvnerPhone:{
        type:String,
        required:true
    },
    RestorentOvnerEmail:{
        type:String,
        requried:true
    },
    Restorenopentime:{
        type:String,
        requried:true
    },
    RestorentTotleEarn:{
        type:Number,   
    },
    RestorentPassword:{
        type:String,
        requried:true
    },
    active:{
        type:Boolean,
        default:true
    },
    RestorentImage:{
        type:String,
        required:true
    }

},{timestamps:true});


Restorent_schema.pre("save",async function(next){
    if(!this.isModified("RestorentPassword")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.RestorentPassword = await bcrypt.hash(this.RestorentPassword,salt);
    next();
});

Restorent_schema.methods.gettoken = function(){
        return jwt.sign({
            id:this._id,
            
        },process.env.SECRATE,{
            expiresIn:"10min"
        });

}

Restorent_schema.methods.ismatch = function(password){
    return bcrypt.compare(password,this.RestorentPassword)
}

const Restorent_model = new mongoose.model("Restorents",Restorent_schema);
module.exports = Restorent_model

