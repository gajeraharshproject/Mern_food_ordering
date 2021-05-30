import React from 'react'
import './RightNav.css'
import { IconButton, TextField, InputAdornment, makeStyles, Paper,InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
const usestyle = makeStyles((theme) => ({
    padding: {
        paddingRight: "10px"
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
        marginRight:"20px",
        backgroundColor:"transparent"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

}))
function Rightnav({page}) {
    const classes = usestyle()
    return (
        <>
            <div className="right_nav">
                <div className="rightnav_heading">
                    <h2>{page}</h2>
                </div>
                <div className="rightnav_right_items">
                    <Paper elevation={false} component="form" className={classes.root}>
                       <TextField
                       placeholder="Search"
                       style={{width:"20rem"}}
                        />
                        <IconButton  style={{backgroundColor:"white"}} color="white" aria-label="Search">
                            <SearchIcon style={{fontSize:"1rem"}}/>
                        </IconButton>
                    </Paper>
                    <DashboardIcon style={{ marginRight: "20px" }} />
                    <NotificationsIcon style={{ marginRight: "20px" }} />
                    <PersonIcon style={{ marginRight: "20px" }} />
                </div>
            </div>
        </>
    )
}

export default Rightnav
