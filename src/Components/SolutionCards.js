import React from 'react'
import { Grid2 } from '@mui/material'
import Card from "./Card.js"
import harvestImg from "../Images/cropped_images/Harvest.png";
import processDiagram from '../Images/CarbonGood_Process.png'



function SolutionCards() {
  return (
    <Grid2 
      container 
      xs={12} 
      spacing={5}
      className="solutions-container" 
      sx={{
        // mt:'10vh',
        alignContent:'center', 
        justifyContent:'center'
      }}
    >
      <Grid2 
        item
        xs={6}
        sx={{ width: '45%'}}
        className="left-card-container"
        >
        <Card 
          className="left-card"
          titleText={"Commercial"}
          bodyText={"This is our industrial scale solution. It is for companies to use at the source."}
          image={processDiagram}
          //navigateTo="/CommercialUseCase"
        />
      </Grid2>
      <Grid2 
        item
        xs={6}
        sx={{ width: '45%'}}
        className="right-card-container"
      >
          <Card 
            className="right-card"
            titleText={"Open Source"}
            bodyText={"This is our open source solution. It is for people to use anywhere."}
            image={harvestImg}
            //navigateTo="/OpenSourceUseCase"
          />
      </Grid2>
    </Grid2>
  )
}

export default SolutionCards