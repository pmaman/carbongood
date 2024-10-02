import React, {useRef, useEffect} from "react";
import Slider from "react-slick";
import { Fab, Box, Typography } from "@mui/material";
import {MuiImg} from "../Theme.tsx";
import harvestImg from "../Images/Harvest-v4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Carousel = () => {
  console.log('CarouselComponent rendered');

  const sliderRef = useRef(null); // Ref to access slider methods

  const settings = {
    dots: true,            // Display navigation dots
    infinite: true,        // Infinite loop sliding
    speed: 500,            // Transition speed in milliseconds
    slidesToShow: 1,       // Number of slides to show at a time
    slidesToScroll: 1,     // Number of slides to scroll at once
    autoplay: false,        // Automatically play slides
    autoplaySpeed: 3000    // Time between each slide in milliseconds
  };

  // Ensure sliderRef is attached correctly
  useEffect(() => {
    if (sliderRef.current) {
      console.log("SliderRef is set:", sliderRef.current);
    }
  }, []);


  return (
    <Box sx={{ position: 'relative', width: "80%", margin: "0 auto", mt: 5 }}>
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

      <Fab
      color="primary"
      aria-label="Previous"
      sx={{
        position: "absolute",
        top: "55%",
        left: "20px",
        transform: "translateY(-50%)",
      }}
      onClick={() => sliderRef.current?.slickPrev()} // Navigate to the previous slide
    >
      <ArrowBackIcon />
    </Fab>

    {/* Next Button */}
    <Fab
      color="primary"
      aria-label="Next"
      sx={{
        position: "absolute",
        top: "55%",
        right: "20px",
        transform: "translateY(-50%)",
      }}
      onClick={() => sliderRef.current?.slickNext()} // Navigate to the next slide
    >
      <ArrowForwardIcon />
    </Fab>
    </Box>
  );
};

export default Carousel;