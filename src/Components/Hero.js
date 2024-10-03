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
            backgroundColor="rgba(0,0,0,0.5)"
            padding = "20px"
            borderRadius ="10px"
            spacing ="30px"
        >
            <Typography 
                sx={{
                    variant:"h1",
                    fontSize:"3rem",
                    color:'white'
                }}>
                Hydroponic Carbon Capture Anywhere, Simply
            </Typography>
            <Typography
                sx={{
                    variant:"h2",
                    fontSize:"2rem",
                    color:'white'
                }}
                >               
                A new CCS for anywhere conventional solutions can and can't go.
            </Typography>
            <Typography
                sx={{
                    variant:"h3",
                    fontSize:"1.5rem",
                    color:'white'
                }}
                >
                CarbonGood economically converts CO2 to biomass at massive scale in a fraction of the area normally required.
            </Typography>
        </Stack>
    </Box>
  )
}

export default Hero