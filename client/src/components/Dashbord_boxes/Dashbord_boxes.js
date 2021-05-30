import React, { useEffect, useState } from 'react'
import './Dashbord_boxes.css'
import { Typography, makeStyles, Paper, Divider } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';
const usestyle = makeStyles((theam) => ({
    boxmain: {
        width: "20%",
        backgroundColor: "white",
        height: "10rem",
        boxShadow: "0 1px 4px 0 rgb(0 0 0 / 14%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position:"relative"


    }
}))
function Dashbord_boxes({Logo,text,totle,color}) {
    const classes = usestyle()
    const [colors,setcolors] = useState("absolute_logo");
    useEffect(() => {
                if(color === "y"){
                    setcolors("absolute_logo y")
                }else if (color === "r") {
                    setcolors("absolute_logo r")
                }else if (color ==="b"){
                    setcolors("absolute_logo b")
                }else if(color === "g"){
                    setcolors("absolute_logo g")
                }
    },[color])
    return (
        <>
            <Paper component="box" elevation={false} className={classes.boxmain}>
                <div className="boxes_information_div">
                    <div className="boxes_logo">
                        <div className={colors }>
                           
                        {
                            <Logo style={{color:"white"}} />
                        }
                            
                        </div>
                    </div>
                    <div className="boxes_info">
                        <Typography style={{ fontSize: "10px" }} variant="h6" className="heading_box">{text}</Typography>
                        <Typography variant="h5"> {totle}</Typography>
                    </div>
                </div>
                <Divider />
                <div className="updateddate">
                    <Typography variant="p" style={{color:"#999"}}>updated 24 jun</Typography>
                </div>
            </Paper>
        </>
    )
}

export default Dashbord_boxes
