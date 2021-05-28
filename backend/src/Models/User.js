const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User_schema = new mongoose.Schema({
    User_email:{
        type:String,
        requried:true
    },
    User_Name:{
        type:String,
        required:true
    },
    User_password:{
        type:String,
        requird:true
    }
},{timestamps:true});

  User_schema.pre("save",(next) => {
      if(!this.isModified("User_password")) return next();
      const salt = bcrypt.genSalt(10);
      this.User_password = bcrypt.hash(this.User_password ,salt)
      next();
  });

 User_schema.methods.gettoken = function(){
     return jwt.sign({id:this._id},process.env.SECRATE,{
         expiresIn="10min"
     });

 }
 User_schema.methods.ismatch = function(password) {
     return bcrypt.compare(password,this.User_password)
 }

const User_model = new mongoose.model("Users",User_model);
module.exports = User_model;
