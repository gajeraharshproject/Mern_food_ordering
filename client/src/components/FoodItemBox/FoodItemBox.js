import React, { useState } from 'react'
import { Box, Typography, Card, CardActionArea, CardActions, CardContent, makeStyles, CardMedia,
 Button
} from "@material-ui/core"
import "./FoodItemBox.css"

import StarBorderIcon from '@material-ui/icons/StarBorder';
const usestyle = makeStyles((them) => ({
    root: {
        maxWidth: 300,
        marginBottom:"1rem"
    },
    midia: {
        height: 220

    },
    color: {
        color: "black",
        fontWeight: "bold",
        fontSize: "1rem"
    }
}))
function FoodItemBox({img,title,rating,reviewcount,desc}) {
   const [n,setn] = useState(parseInt(rating))
  
    const stare = [
      1,2,3,4,5
    ]
   
    const classes = usestyle()
    return (
        <>
            <Card className={classes.root}> 
                <CardActionArea>
                    <CardMedia
                        className={classes.midia}
                        image={img}
                        title="food item box"
                    />
                    <CardContent>
                        <Typography variant="body1" className={classes.color}>{title}</Typography>
                        <Box className="sate_box">
                                {
                                    stare.map((item,index) => {
                                        return (
                                            <StarBorderIcon
                                            key={index}
                                            onClick={() => setn(item)}
                                             style={item <= n ? {color:"red"} : {color:"black"}} />
                                        )
                                    })
                                }     
                                <Typography  variant="body1" component="p" style={{marginLeft:"1rem"}}>({reviewcount})</Typography>       
                        </Box>
                        <Typography component="p" variant="body2">{desc}</Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                                    <Button size="small" color="primary"> 
                                            View More
                                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default FoodItemBox
