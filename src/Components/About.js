import React, {useState, useEffect, useRef} from 'react'
import { ArrowDownward } from '@mui/icons-material';
import Grid2 from '@mui/material/Grid2'
import { Stack, Fab, Typography } from '@mui/material'
import PageTabs from './PageTabs.js'
import Hero from './Hero.js';
import SolutionCards from './SolutionCards.js';
import ThreeColumnSection from './ThreeColumnSection.js';

function ScrollButton({ targetRef }) {
  //console.log("ScrollButton rendered"); // Check if it's rendering
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    //shows/hides fab button when 20% of pagetabs are in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the targetRef component is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(false); // Hide the button when component is visible
        } else {
          setIsVisible(true); // Show the button when component is not visible
        }
      },
      {
        threshold: 0.2, // Trigger when 50% of the element is in the viewport
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current); // Observe the target component
    }

    // Cleanup observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  const scrollToComponent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="scroll down"
        style={{
          display: isVisible ? 'block' : 'none',
          position: 'fixed',
          bottom: '20px',
          right:'20px',
          zIndex: '9999',
          minWidth: 'auto',
          minHeight: 'auto',
          height: '40px',
          width: '40px',
          padding: '6px 12px',  // Optional padding
          display: 'flex',    // Flexbox for alignment
          alignItems: 'center',  // Vertically align content
          justifyContent: 'center', // Horizontally align content
          borderRadius: '50%',  // Optional: keep it circular
        }}
        onClick={scrollToComponent}
      >
        <ArrowDownward style={{fontSize: '24px'}}/>
      </Fab>
    </>
  );
}

export default function About() {
  const targetRef = useRef(null);
  return (
    <>
      <Grid2 
        container
        xs={12}
        mt={8}
        spacing={5}
        sx={{
          minWidth: "100%", 
          mb:'50px', 
          justifyContent:'center', 
          alignItems:'center'
        }}
      >
        <Grid2 item xs={12} sx={{m:'0px', width:'100%'}}>
          <Hero />
        </Grid2>
        <Grid2 item xs={12}>
          <Typography variant="h5" sx={{width:'80vw', my:'40px'}}>
            It will take decades for renewables to substitute most of our fossil-fuelled energy and industrial infrastructure - cement, steel etc. 
            {<strong> We don't have that time.</strong> } CarbonGood is designed to buy us that time by converting fossil emissions directly to biomass.
          </Typography>
        </Grid2>
        <Grid2 item 
          xs={12} 
          sx={{
            m:'20px', 
            width:'80vw', 
            height: 'auto',
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center'
          }}
        >
          <iframe
            height="400px"
            width="100%"
            src="https://www.youtube.com/embed/vkteemwYEvw?si=niZIqchOlHJuw363&amp;controls=0"
            title="CarbonGood MIT SOLVE" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            style={{
              borderRadius:"10px",
              border:"2px solid rgba(0,0,0,0.5)",
            }}
            > 
          </iframe>
        </Grid2>
        <Grid2 item xs={12}>
          <ThreeColumnSection />
        </Grid2>
        <Grid2 item xs={12} sx={{backgroundColor:'lightgrey', py:'60px'}}>
          <Stack direction="column" spacing={3}>
            <Typography variant="h2">Solutions</Typography>
            <SolutionCards />
          </Stack>
        </Grid2>
        {/* <Grid2 item xs={12}>
          <ScrollButton targetRef={targetRef} />
        </Grid2> */}
        <Grid2 item xs={12}> 
          <PageTabs ref={targetRef} />
        </Grid2>
      </Grid2>
    </>
  );
}