import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
// import {MuiImg} from "../Theme.tsx";
import heroImg from '../Images/hydroponics hero.png'

const Hero = () => {
  return (
    <Box 
        sx={{
            padding:5,
            position:'relative',
            width:'100%',
            height:'60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url('${heroImg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundOpacity:0.2,
        }}
    >
        <Stack
            direction="column"
            sx={{
                width:"80%",
                height:'auto',
                px:"50px",
                py:"30px"
            }}
            spacing ={5}
            borderRadius ="10px"
            backgroundColor="rgba(0,0,0,0.5)"
        >
            <Typography variant="h1" sx ={{color:'#fff'}}>
                Hydroponic Carbon Capture Anywhere, Simply
            </Typography>
            <Typography variant="h2" sx={{color:'white'}}>               
                Converting CO2 to biomass in a fraction of the area normally required
            </Typography>
        </Stack>
    </Box>
  )
}

export default Hero