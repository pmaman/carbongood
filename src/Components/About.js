import React, {useRef} from 'react'
import { ArrowDownward } from '@mui/icons-material';
import Grid2 from '@mui/material/Grid2'
import { Fab, Typography } from '@mui/material'
import PageTabs from './PageTabs.js'
import Hero from './Hero.js';

function ScrollButton({ targetRef }) {
  console.log("ScrollButton rendered"); // Check if it's rendering

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
          position: 'fixed',
          bottom: '20px',
          zIndex: '9999'
        }}
        onClick={scrollToComponent}
      >
        <ArrowDownward />
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
        mt={8}
        sx={{minWidth: "100%", justifyContent:'center', alignItems:'center'}}
      >
        <Grid2 item xs={12} sx={{m:'0px', width:'100%'}}>
          <Hero />
        </Grid2>
        <Grid2 item xs={12} sx={{m:'50px'}}> 
            <iframe
              width="100%" 
              height="auto"
              src="https://www.youtube.com/embed/vkteemwYEvw?si=niZIqchOlHJuw363&amp;controls=0"
              title="CarbonGood MIT SOLVE" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              //allowfullscreen
              > 
            </iframe>
          </Grid2>
          {/* <Grid2>
            <ScrollButton targetRef={targetRef} />
          </Grid2> */}
        <Grid2 item xs={12} > 
          <PageTabs ref={targetRef} />
        </Grid2>
      </Grid2>
    </>
  );
}