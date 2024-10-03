import React, {useRef} from "react";
import Slider from "react-slick";
import { Fab, Box, Typography } from "@mui/material";
import {MuiImg} from "../Theme.tsx";
import harvestImg from "../Images/cropped_images/Harvest.png";
import biocharImg from "../Images/cropped_images/biochar.png";
import dacImg from "../Images/cropped_images/Dac.png";
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
  // useEffect(() => {
  //   const logInterval = setInterval(() => {
  //     console.log("SliderRef is set:", sliderRef.current);
  //   }, 1000); // Log every second
  
  //   // Cleanup interval when the component is unmounted or re-rendered
  //   return () => clearInterval(logInterval);
  // }, [sliderRef]);


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
              <Typography variant="h4" align="center">Biomass and Food Production</Typography>
              <MuiImg
                  src={harvestImg}
              >  
              </MuiImg>
              <Typography 
                sx={{
                    variant:"body1",
                    align:"center",
                    padding:'30px'
                }}>
                CarbonGood uses elevated CO2 levels in fossil ,fuel emissions to accelerate biomass growth, 
                coupling that with optimized lighting and extended daylight to produce a virtuous cycle. 
                HCCAS is also a high-density format yielding much more biomass, much faster, from each 
                square foot of land than any other agricultural solution can do, enabling it to lock-up 
                megatons of carbon in useful product. And do so cleanly, with no pollution, no pesticide, 
                and no herbicide.
              </Typography>
          </Box>
          <Box>
              <Typography variant="h4" align="center">Biomass to Biochar</Typography>
              <MuiImg
                  src={biocharImg}
              >  
              </MuiImg>
              <Typography 
                sx={{
                    variant:"body1",
                    align:"center",
                    padding:'30px'
                }}>
                Biocharring the biomass permanently sequesters carbon as valuable products (emissions from the 
                charring process are also captured). Biomass height is constrained by the format but grasses, cereals 
                and other fast-growing species work, and work well. Another option is industrial hemp which, among many 
                other uses, is the raw material for carbon-negative hempcrete, a material that permanently locks-up CO2 
                in buildings.
              </Typography>
          </Box>
          <Box>
              <Typography variant="h4" align="center">Carbon Capture</Typography>
              <MuiImg
                  src={dacImg}
              >  
              </MuiImg>
              <Typography 
                sx={{
                    variant:"body1",
                    align:"center",
                    padding:'30px'
                }}>
                CarbonGood uses established off-the-shelf and cost-effective technology to safely capture 
                CO2 from any emitter or directly from the air with zero pollution. We convert captured CO2 
                on-site to biomass and then to a high value, immediately usable product (biochar) that is 
                in growing demand.
              </Typography>
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