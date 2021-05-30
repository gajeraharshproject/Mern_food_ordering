import React, { useState } from 'react'
import './Nav.css'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Button, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const usestyle = makeStyles((theme) => ({
    button: {
        color: "white",
        width: "90%",
        margin: "2px 0px",
        height: "4rem",
        
        '&:hover': {
            backgroundColor: '#00acc1',
            boxShadow: 'none',
        },
        "&.active": {
            background: '#00acc1',
        },
    
    },

    Navlinl: {
        width: "100%",
        textDecoration: "none",
        color: "white"
    },
    Buttonactive: {
        color: "white",
        width: "90%",
        margin: "2px 0px",
        height: "4rem",
        backgroundColor: "blue"
    },

}))
function Nav() {
    const classes = usestyle()
    const [activve, setactive] = useState(["DashBord"])
    return (
        <>
            <section className="Navbar_Section">
                <div className="Nav_section_items">
                    <div className="nav_heading">
                        <span><FastfoodIcon /></span> <h1>Createive Item</h1>
                    </div>
                    <div className="navigation_items">

                        <Button
                            startIcon={<DashboardIcon />}
                            component={NavLink}
                            exact
                            to={"/"}
                            m={10}
                            className={classes.button}>DashBord</Button>
                        <Button
                            startIcon={<PersonIcon />}
                            component={NavLink}
                            to={"/profile"}
                            className={classes.button}>Profile</Button>
                        <Button
                            startIcon={<FileCopyIcon />}
                            component={NavLink}
                            to={"/records"}
                            className={classes.button}>Records</Button>
                        <Button
                            startIcon={<FastfoodIcon />}
                            component={NavLink}
                            to={"/fooditems"}
                            className={classes.button}>Food Itms</Button>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Nav;
