const jwt = require("jsonwebtoken")
const restorent_model = require("../Models/Restorentmodel")

exports.CheckRestorentauth = async (req,res,next) => {
    if(!req.headers.authorization && !req.headers.authorization.statsWith("Bearer") ){
        return res,json({msg:"you not authorizated ",success:false})
    }

    const token = req.headers.authorization.split(" ")[1];
  
    if(!token){
        return res.send({msg:"you not authorize ",success:false})
    }

    try {
        const decordtoken = jwt.verify(token,process.env.SECRATE);
        const Restorent = await restorent_model.findById(decordtoken.id);
        if(!Restorent) return res.send({msg:"you not authorize ",success:false})
        req.Restorent = Restorent
        next();
    } catch (error) {
        res.status(200).json(({msg:"you not authorize ",success:false,jwterror:true}))
    }
}



