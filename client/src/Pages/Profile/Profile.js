import React from 'react'
import './Profile.css'
import Nav from '../../components/Rightnav/Rightnav'
import {  Box, Button, makeStyles, Typography } from "@material-ui/core";
import profileimage from '../../utils/images/profile.jpg'

import Profileform from './Profileform';
const usestyle = makeStyles((them) => ({
    main_profile_box: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        height: "100vh",
        marginTop: "3rem"
    },
    main_proifle_subdiv_left: {
        width: "65%",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px 0 rgb(0 0 0 / 14%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height:"100vh"
    },
    main_proifle_subdiv_right: {
        width: "30%",
        height: "75vh",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px 0 rgb(0 0 0 / 14%)",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        position:"relative",
        marginTop:"1rem"
 

    },
   
}))

function Profile() {
    const classes = usestyle()
   
    const logout = async () => {
            await localStorage.removeItem("token")
          window.location.reload()
            
    }
    return (
        <>

            <Box className="profile_page_main">
                <Nav page={"Profile"} />
                <Box className={classes.main_profile_box}>
                    <Box className={classes.main_proifle_subdiv_left}>
                        <Box className="top_div_left_div">
                            <Typography variant="h5">Edit Profile</Typography>
                            <Typography variant="h6">Complete your profile</Typography>
                        </Box>
                        <Box className="left_div_profile_inputs">
                                <Profileform />
                        </Box>
                    </Box>

                    <Box className={classes.main_proifle_subdiv_right}>
                            <Box className="profile_image_box">
                                <img className="Profile_image" src={profileimage} alt="profile image" />
                            </Box>
                            <Box className="Restorent_details">
                                <Typography variant="h5">harsh</Typography>
                                <Typography variant="h5">Sankal Restorent</Typography>
                                <Typography variant="h6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque fugit nulla 
                                similique vel, eius libero
                                 consequuntur. Enim, itaque aut natus libero et vitae!</Typography>
                                 <Button onClick={logout} color="primary" variant="contained">LogOut</Button>
                            </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default Profile
