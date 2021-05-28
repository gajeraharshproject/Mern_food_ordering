const jwt = require("jsonwebtoken");
const User_model = require("../Models/user");


exports.checkuserauth = async (req,res,next) =>{
    if(!req.headers.authorization && !req.headers.authorization.startsWith("Bearer")){
        return res.status(500).json({msg:"you not authorizeted",success:false})
    }
    
    const token = req.headers.authorization.split(" ")[1];
    if(!token) return res.status(500).json({msg:"you not authorizated",success:false})

    try {
        const decordtoken = jwt.verify(token,process.env.SECRATE)
        const user = await User_model.findById(decordtoken.id);
        if(!user) return res.status(500).json({msg:"you not authorizated",success:false})
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({msg:"you not authorizeted",success:false})
    }
}