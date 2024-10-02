import React, {useRef} from 'react'
import { ArrowDownward } from '@mui/icons-material';
import Grid2 from '@mui/material/Grid2'
import { Fab, Typography } from '@mui/material'
import PageTabs from './PageTabs.js'

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
        mt={10}
        sx={{minWidth: "100%", justifyContent:'center', alignItems:'center'}}
      >
        <Grid2 item xs={12}>
          <Typography 
            sx={{
                variant:"h1",
                fontSize:"3rem",
                padding:'30px'
            }}>
            Hydroponic Carbon Capture Anywhere, Simply
          </Typography>
          <Typography
            sx={{
                    variant:"h2",
                    fontSize:"2rem",
            }}
            >
              A new CCS for anywhere conventional solutions can and can't go. 
          </Typography>
          <Typography
            sx={{
              variant:"h3",
              fontSize:"1.5rem",
            }}
          >
            CarbonGood economically converts CO2 to biomass at massive scale in a fraction of the area normally required.
          </Typography>
        </Grid2>
        <Grid2 item xs={12} sx={{m:'50px', width:'100%'}}> 
            <iframe
              width="100%" 
              height="300px"
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