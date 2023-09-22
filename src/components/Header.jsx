import styled from '@emotion/styled';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import image1 from "../asset/قلاية.png"
import image2 from "../asset/قلايه2.jpg"
import image3 from "../asset/قلايه3.jpg"
import image4 from "../asset/قلايه4.jpg"
import Slider from 'react-slick';


function Header() {
  let [selectImage, setSelectImage] = useState(image1)
  const sm = useMediaQuery("(max-width:600px)");
  let appendDots = dots => (
    <ul style={{ background: 'rgba(0, 0, 0, 0.75)' }}>
      {dots.map((dot, i) => (
        <Typography component={"li"}
          key={dot.key}
          sx={{
            display: 'inline-block',
            margin: '0 5px',
            padding: '5px',
            color: dot.active ? 'white' : 'gray',
           
            "button:before": {
              backgroundImage: `url(${arrayimage[i]})`,
              opacity: "1 !important",
              width: "100% !important",
              height: "100% !important",

              backgroundSize: "cover",
              color: "transparent !important"
            },"button":{
             width: "40px !important",
              height: "40px !important",
            }
          }}
        > {dot.props.children}


        </Typography>
      ))}
    </ul>
    // <ul >
    //   {dots.map((dot,i) => (
    //    


    //   ))}
    // </ul>
  );
  let StyleImage = styled("img")({
    borderBottomRightRadius: !sm ? "100%" : "unset",
    height: "60vh",
    position: "relative",
    zIndex: 100, width: "100%"

  })
  let StyleBottomImage = styled("Buttom")(({ left, bottom, image }) => ({
    height: "41px",
    width: "41px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    position: !sm ? "absolute" : "unset",
    left: left,
    bottom: bottom,
    borderRadius: "14px",
  }))
  let arrayimage = [image1, image2, image3, image4]
  function clickimage(index) {
    setSelectImage(arrayimage[index])
  }
  const settings = {
    dots: true,
    appendDots: appendDots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => { console.log(sm) }, [sm])
  return (!sm ? <>
    <StyleImage src={selectImage}></StyleImage>
    <Box sx={{
      height: "66vh", position: "absolute",
      width: "100%",
      top: "0"
    }}>
      {arrayimage.map((ele, i) => <StyleBottomImage left={`${45 + i * 14}%`} bottom={`${13 * i}%`} image={ele} onClick={() => clickimage(i)}></StyleBottomImage>)}

    </Box> </> : <>
    <Slider {...settings} >
      {arrayimage.map((ele) => <Box>
        <img src={ele} style={{objectFit:"cover",width:"100%"}}/>
      </Box>)}


    </Slider>
  </>
  )
}

export default Header