
import React, {  useState } from 'react';
import Profileform from "../../Pages/Profile/Profileform"
import { Box, Typography,TextField,Button,makeStyles } from "@material-ui/core";
import "./Createrestoren.css"
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux"
import {loginRestorent} from "../../Store/Actions/Auth"
const usestyle = makeStyles((theam) => ({
  textfild:{
    width:450,
    margin:"1rem 0rem"
  }
}))

function CreateRestorent() {
  const dispatch = useDispatch()
  const classes = usestyle()
  const [login, setlogin] = useState(false);
  //ologin useform array
  const {register,handleSubmit}= useForm()

  const onsubmit = (data) => {
    dispatch(loginRestorent(data))
  }
  return (
    <>
      {
        login ?
          <Box className="loginj_componet">
                <form className="form_login" onSubmit={handleSubmit(onsubmit)}>
                    <TextField {...register("RestorentOvnerEmail",{required:true})} className={classes.textfild} label="Email" type="email"  />
                    <TextField  {...register("RestorentPassword",{required:true})} className={classes.textfild} label="Password" type="Password"  />
                    <Button type="submit" color="primary">Login</Button>
                      <Typography color="primary" variant="body1" 
                        style={{cursor:"pointer",margin:"3px 0px 0px 0px"}}
                        onClick={() => setlogin(!login)}
                      >Create Restorent</Typography>
                </form>
          </Box>
          :
          <Box className="main_restoent_createres">
            <Box style={{ width: "50%" }}>
              <Profileform />
              <Box className="main_restorent_createres_login">
                <Typography
                 color="primary" 
                 style={{cursor:"pointer"}}
               
                 onClick={() => setlogin(!login)} variant="body1" >Login</Typography>
              </Box>

            </Box>
          </Box>
      }


    </>
  )
}

export default CreateRestorent;


