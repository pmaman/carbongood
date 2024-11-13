import React from 'react'
import {MuiImg} from '../Theme.tsx'
import { Grid2 } from '@mui/material';
import components1 from '../Images/CG_Components1.png'
import components2 from '../Images/CG_Components2.png'

function CgComponents() {
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
                <MuiImg
                    src= {components1}
                    sx={{width:'100%'}}
                />
        </Grid2>
        <Grid2 
            item 
            xs={5} 
            sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
            }}
            >
                <MuiImg
                    src= {components2}
                    sx={{width:'100%'}}
                />
        </Grid2>
    </Grid2>
  )
}

export default CgComponents