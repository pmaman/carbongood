import React, {useRef, useEffect} from "react";
import Slider from "react-slick";
import { Fab, Box, Typography } from "@mui/material";
import {MuiImg} from "../Theme.tsx";
import harvestImg from "../Images/Harvest-v4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Carousel = () => {

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
    const logInterval = setInterval(() => {
      console.log("SliderRef is set:", sliderRef.current);
    }, 1000); // Log every second
  
    // Cleanup interval when the component is unmounted or re-rendered
    return () => clearInterval(logInterval);
  }, [sliderRef]);


  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Use sliderRef to go to previous slide
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Use sliderRef to go to next slide
    }
  };


  return (
    <Box sx={{ position: 'relative', width: "80%", margin: "0 auto", mt: 5 }}>
      <Slider {...settings} ref={sliderRef}> 
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
      onClick={goToPrevSlide} // Use the new function to navigate to the previous slide
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
        onClick={goToNextSlide} // Use the new function to navigate to the previous slide
    >
      <ArrowForwardIcon />
    </Fab>
    </Box>
  );
};

export default Carousel;