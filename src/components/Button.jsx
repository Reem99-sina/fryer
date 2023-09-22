import React from 'react'
import image3 from "../asset/قلايه3.jpg"
import image4 from "../asset/قلايه4.jpg"
import {Button, Typography} from '@mui/material'
function ButtonShare({text,image,onClick}) {
  return (
    <Button sx={{display:"flex",justifyContent:"space-between",border:"1px solid",width:"20%"}}onClick={onClick}>
    <Typography component={"p"}>{text}</Typography>

    <img src={image}style={{width: "25%",
borderRadius: "10px"}}/>
</Button>
  )
}

export default ButtonShare