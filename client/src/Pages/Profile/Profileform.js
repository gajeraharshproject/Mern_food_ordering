import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { Box, TextField, Button, makeStyles } from '@material-ui/core'
import jwt_decode from "jwt-decode"
import { getRestorendata } from "../../Store/Actions/Auth"


const usestyle = makeStyles((them) => ({
    inputsssize: {
        width: "450"
    }
}))
function Profileform() {
  
    const  [restorent, setrestorent] = useState({});
    const classes = usestyle();
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    const getdata = async () => {
        if (token) {
            const decodetoken = jwt_decode(token)
            const data = await dispatch(getRestorendata(decodetoken.id))
            if (data) {
                setrestorent(data)
                console.log(data)
            }
        }

    }
    useEffect(() => {
        getdata()

    }, [])

    return (
        <form>
        {
            restorent.RestorentName ? 
                <>
                <Box className="left_div_profile_sub_lineejust">
            <TextField defaultValue={restorent.RestorentName} className={classes.inputsssize} label=" RestorentName" />
            <TextField defaultValue={restorent.RestorentType} className={classes.inputsssize} label="RestorentType" />
            <TextField defaultValue={restorent.RestorentOvnerName} className={classes.inputsssize} label="RestorentOvnerName" />

        </Box>
        <Box className="left_div_profile_sub_lineejust">
            <TextField defaultValue={restorent.RestorentState} className={classes.inputsssize} label="State" />
            <TextField defaultValue={restorent.RestorentArea} className={classes.inputsssize} label="Area" />
            <TextField defaultValue={restorent.RestorentAreaPincode} className={classes.inputsssize} label="Pincode" />
        </Box>
        <Box className="left_div_profile_sub_lineejust">
            <TextField defaultValue={restorent.RestorentOvnerPhone} className={classes.inputsssize} label="Phone" />
            <TextField defaultValue={restorent.RestorentOvnerEmail} className={classes.inputsssize} label="Email" />
            <TextField defaultValue={restorent.Restorenopentime} className={classes.inputsssize} label="Open Time" />
        </Box>
        <Box className="left_div_profile_sub_lineejust">
          
            <TextField type="file" className={classes.inputsssize} label="Image" />
        </Box>
        <Box className="left_div_profile_sub_lineejust">
            <Button type="submit" color="primary" variant="contained">Update Profile</Button>
        </Box>
                </>
                : null
        }

        </form>
    )
}

export default Profileform;
