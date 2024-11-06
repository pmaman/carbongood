import React, {useRef} from "react";
import Slider from "react-slick";
import { Fab, Box, Typography } from "@mui/material";
import {MuiImg} from "../Theme.tsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Carousel = ({slides}) => {

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
    <Box
      className="carousel-container" 
      sx={{ 
        position: 'relative', 
        width: "80%", 
        height:'auto', 
        margin: "0 auto", 
        mt: 5, 
        overflow: 'visible' 
      }}>
      <Slider {...settings} ref={sliderRef} sx={{height: 'auto'}}>
        {slides.map((slide, index) => (
          <Box 
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Align items vertically centered
              alignItems: 'center', // Center items horizontally
              padding: '20px', // Add some padding for better spacing
          }}>
            <Typography variant="h4" align="center" sx ={{mb: '20px'}}>
              {slide.title}
            </Typography>
            <MuiImg 
              src={slide.image} 
              sx ={{maxWidth: '100%', height:'auto'}} //ensure responsive image
            />
            <Typography variant="body1" sx={{ align: "center", mt: '20px', whiteSpace: 'normal' }}>
              {slide.text}
            </Typography>
          </Box>
        ))}
      </Slider>

      <Fab
      color="primary"
      aria-label="Previous"
      sx={{
        position: "absolute",
        top: "55%",
        left: "25px",
        transform: "translateY(-50%)",
        zIndex: '0'
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
        right: "25px",
        transform: "translateY(-50%)",
        zIndex: '0'
      }}
        onClick={goToNextSlide} // Use the new function to navigate to the previous slide
    >
      <ArrowForwardIcon />
    </Fab>
    </Box>
  );
};

export default Carousel;