import React from 'react'
import { Grid2} from '@mui/material'
import { MuiImg } from '../Theme.tsx'
import processDiagram from '../Images/CarbonGood_Process.png'

function OpenSourceUseCase() {
  return (
    <Grid2
      container
      xs={12}
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Grid2 item xs={9} sx={{mt:'100px'}}>
        <MuiImg
            src= {processDiagram}
        />
      </Grid2>
    </Grid2>
  )
}

export default OpenSourceUseCase