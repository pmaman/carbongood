import React from 'react'
import {MuiImg} from '../Theme.tsx'
import { Grid2 } from '@mui/material';
import processDiagram from '../Images/CarbonGood_Process.png'
import glossary from '../Images/CarbonGood_Glossary.png'

function SolutionsOverview() {
  return (
    <Grid2
      container
      xs={12}
      spacing={10}
      sx={{
        alignItems:'center',
        justifyContent:'center',
        my:'100px',
      }}
    >
      <Grid2 
        item 
        xs={6} 
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}
    >
        <MuiImg
            src= {processDiagram}
            sx={{width:'45%', height:'auto'}}
        />
      </Grid2>
      <Grid2 
        item 
        xs={6} 
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}
        >
            <MuiImg
                src= {glossary}
                sx={{width:'45%', height:'auto'}}
            />
        </Grid2>
    </Grid2>
  )
}

export default SolutionsOverview