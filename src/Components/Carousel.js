import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import theme, {MuiImg} from "../Theme.tsx";
import harvestImg from "../Images/Harvest-v4.png";

const Carousel = () => {
  const settings = {
    dots: true,            // Display navigation dots
    infinite: true,        // Infinite loop sliding
    speed: 500,            // Transition speed in milliseconds
    slidesToShow: 1,       // Number of slides to show at a time
    slidesToScroll: 1,     // Number of slides to scroll at once
    autoplay: false,        // Automatically play slides
    autoplaySpeed: 3000    // Time between each slide in milliseconds
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 5 }}>
      <Slider {...settings}>
        <Box>
          <Typography variant="h4" align="center">Slide 1</Typography>
          <MuiImg
            src={harvestImg}
          >  
          </MuiImg>
        </Box>
        <Box>
          <Typography variant="h4" align="center">Slide 2</Typography>
        </Box>
        <Box>
          <Typography variant="h4" align="center">Slide 3</Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;