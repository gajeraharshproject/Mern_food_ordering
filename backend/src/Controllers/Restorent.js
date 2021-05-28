const validator = require("validator")
const Restorent_model = require("../Models/Restorentmodel")

exports.CreateRestorent = async (req, res) => {

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

    if (!Restorenopentime || !RestorentOvnerPhone || !RestorentArea || !RestorentAreaPincode || !RestorentName || !RestorentOvnerEmail || !RestorentType || !RestorentArea || !RestorentOvnerName || !RestorentPassword || !RestorentState) {
        return res.status(500).json({ msg: "Please Enter All fields", success: false })
    }

    if (!validator.isEmail(RestorentOvnerEmail)) {
        return res.status(500).json({ msg: "Please Type Valide Email", success: false });
    }
    console.log(req.file);
    const { filename } = req.file;
    try {
        const checkemailexist = await Restorent_model.findOne({ RestorentOvnerEmail });
        if (checkemailexist) {
            return res.status(400).json({ msg: "this Email alerady exist", success: false })
        }
        const newresorent = await Restorent_model.create({
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
            RestorentImage: filename
        });

        if (!newresorent) return res.status(500).json({ msg: "Plase Try Again", success: false })
        const token = await newresorent.gettoken();

        res.status(200).json({ msg: "Restorent Created", success: true, data: newresorent, token: token })

    } catch (error) {
        console.log(error)
    }

}

exports.getallrestorent = async (req, res) => {
    try {
        const allrestorent = await Restorent_model.find({});
        if (!res) return res.status(400).json({ msg: "try again", success: false });

        return res.status(200).json({
            success: true,
            data: allrestorent
        })
    } catch (error) {
        console.log(error)
    }
}

exports.updateRestorent = async (req, res) => {

}

exports.deleteresotrent = async (req, res) => {

}

exports.activechange = async (req, res) => {
    id = req.params.id
    try {
        const restorent = await Restorent_model.findById(id);
        if (!restorent) return res.status(500).json({
            msg: "You not authrizeted please login yout current restorent",
            success: false
        })

        if (restorent.active) {
        
            const updateacivefalse = await Restorent_model.findByIdAndUpdate(id, {
                active: false
            }, {
                new: true
            })
            if (!updateacivefalse) return res.status(5000).json({ msg: "try again", success: false })
            return res.status(5000).json({ msg: "your restorent currently close", success: true, data: updateacivefalse })
        }

        const updateactivetrue = await Restorent_model.findByIdAndUpdate(id, {
            active: true
        }, {
            new: true
        });
        if (!updateactivetrue) return res.status(5000).json({ msg: "try again", success: false })
        res.status(5000).json({ msg: "your restorent currently open", success: true, data: updateactivetrue })
    } catch (error) {
        console.log(error)
    }
}


exports.RestorentLogin = async (req, res) => {
    const { RestorentOvnerEmail, RestorentPassword } = req.body;
    if (!RestorentOvnerEmail || !RestorentPassword) {
        return res.status(400).json({ msg: "Please Enter All Details ", success: false })
    }
    try {
        const checkemailexist = await Restorent_model.findOne({ RestorentOvnerEmail });
        const ismathch = await checkemailexist.ismatch(RestorentPassword)
        if(!ismathch) return res.status(500).json({msg:"Plaase Enter Valid Password",success:false})
        const token = await checkemailexist.gettoken();
        res.status(200).json({
            msg:"you have successfully loggedin",
            success:false,
            token
        })
    } catch (error) {
        console.log(error)
    }
}


exports.addfivestatereatting = async (req,res) => {
    const {id,ratingstare} = req.body;
    
    try {
        const reating = {
            Rating:ratingstare,
            ReviewBy:req.user._id
        }
        const addfivestarreating = await Restorent_model.findByIdAndUpdate(id,{
            $push:{Fivestarereview:reating}
        },{
            new:true
        });
        if(!addfivestarreating) return res.status(500).json({msg:'Try again',success:false})
        
        return res.status(200).json({msg:"reating added ",success:true,data:addfivestarreating})
    } catch (error) {
        console.log(error)
    }
}