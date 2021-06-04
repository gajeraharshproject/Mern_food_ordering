import React from 'react'
import './Dashbord_boxes.css'
import {Typography} from "@material-ui/core"

function Dashborditemboxes({img,foodtitle,fooddesc,updatedat}) {
    return (
            <div className="main_Dashbord_item_div">
                    <div className="img_div">
                            <img src={img} alt="some image" />
                    </div>
                    <div className="conteint_dahsbord_item">
                        <Typography variant="h4">{foodtitle}</Typography>
                        <Typography variant="h6">{fooddesc}</Typography>
                      
                    </div>
                  
                    <div className="updatedat_dahshbord_item">
                            <Typography>{updatedat}</Typography>
                    </div>
            </div>
    )
}

export default Dashborditemboxes;
