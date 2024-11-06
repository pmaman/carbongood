import React from 'react'
import { Grid2 } from '@mui/material'
import TwoColumn from './TwoColumn'
import harvestImg from "../Images/cropped_images/Harvest.png";

function OpenSourceUseCase() {
  return (
    <Grid2
      container
      xs={12}
      sx={{
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Grid2 item xs={12}>
        <TwoColumn image={harvestImg} title={"test"} body={"test"} side={left}/>
      </Grid2>
    </Grid2>
  )
}

export default OpenSourceUseCase