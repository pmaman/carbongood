import React from 'react'
import {Grid2 } from '@mui/material'
import {MuiImg} from '../Theme.tsx'
import processDiagram from '../Images/CarbonGood_Process.png'


function CgProcess() {
  return (
    <Grid2 
        container
        xs={9}
        spacing={10}
        sx={{
            alignItems:'center',
            justifyContent:'center',
            my:'100px',
        }}
    >
        <Grid2 
            item 
            sx={{
                width:'100%',
                height:'auto',
                alignItems:'center',
                justifyContent:'center',
            }}
            >
                <MuiImg
                    src= {processDiagram}
                    sx={{width:'100%'}}
                />
        </Grid2>
    </Grid2>
  )
}

export default CgProcess