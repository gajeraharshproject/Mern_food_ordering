import React from 'react'
import './Dashbord_boxes.css'
import {Typography,Divider} from "@material-ui/core"
import img1 from '../../utils/images/240_F_269675262_UNHEWc4agzRjolSfLrxdatB3Gwntj4c4.jpg'
function Dashbord_item_boxes({img,foodtitle,fooddesc,updatedat}) {
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
                            <Typography variant="p">{updatedat}</Typography>
                    </div>
            </div>
    )
}

export default Dashbord_item_boxes;
