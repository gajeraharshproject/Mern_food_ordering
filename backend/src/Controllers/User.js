const User_model = require("../Models/User");


exports.Signup = async (req,res) => {
    const {
        User_email,
        User_name,
        User_password
    } = req.body;

    if(!User_email || !User_pasword || !User_name) return res.status(500).json({msg:"Please fill all details",success:false});
    try {
        const checkuserexist = await User_model.find({User_email});
        if(checkuserexist) return res.status(400).json({msg:"this user already exist",success:false})
        const user = await User_mdoel.create({
            User_email,
            User_password,
            User_name
        });

        if(!user) return res.status(500).json({msg:"please Try agin ",success:false})
        const token = await  user.gettoken();
        
        return res.status(200).json({msg:"user is creared",success:true,data:user,token})
    } catch (error) {
        console.log(error)
    }
}


exports.signin = async (req,res) => {
 const {
     User_email,
     User_pasword
 } = req.body;

 if(!User_email || !User_pasword ) return res.status(400).json({msg:"enter all filds",success:false});

 const user = await User_model.find({User_email});
 if(!user) return res.status(400).json({msg:"enter correct Email",success:false});
 
 const ismatch = await user.ismatch(User_pasword);

 if(!ismatch) return res.status(400).json({msg:"enter correct Password",success:false});

 const token = await user.gettoken();

 return res.status(200).json({msg:"yoru are signind ",success:true,data:user,token})
}


