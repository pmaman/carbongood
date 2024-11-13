import React from 'react'
import {MuiImg} from '../Theme.tsx'
import { Grid2, Stack } from '@mui/material';
import keyFeatures from '../Images/KeyFeatures.png'
import performanceMetrics from '../Images/performanceMetrics.png'

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
        xs={5} 
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}
      >
        <Stack direction='column'>
          <MuiImg
              src= {keyFeatures}
              sx={{width:'100%'}}
          />
          <MuiImg
              src= {performanceMetrics}
              sx={{width:'100%'}}
          />

        </Stack>
      </Grid2>
    </Grid2>
  )
}

export default SolutionsOverview