import React, {useState} from 'react'
import Grid2 from '@mui/material/Grid2'
import discordIcon from '../Logo/icon_clyde_white_RGB.png'
//import globeIcon from '../Logo/Globe.png'
import { Tabs, Tab, Paper, Stack, Button, Typography, ThemeProvider } from '@mui/material'
import theme, {MuiImg} from '../Theme.tsx'
import harvestImg from "../Images/Harvest-v4.png"
import Carousel from './Carousel'

export default function About() {
  return (
    <ThemeProvider theme = {theme}>
      <Grid2 
        container
        mt={10}
        sx={{minWidth: "100%", justifyContent:'center', alignItems:'center'}}
      >
        <Grid2 item xs={12}> 
          <Carousel />
        </Grid2>    
      </Grid2>
    </ThemeProvider>
  );
}