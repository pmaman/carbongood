import { Grid2, Paper, Stack, Typography } from '@mui/material';
import {MuiImg} from "../Theme.tsx"
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card({titleText, bodyText, image, navigateTo}) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(navigateTo);  
    };

  return (
    <Paper
        onClick={handleClick}
        sx={{
            px:'0px',
            pt:'0px', 
            pb:'30px',
            alignContent:'center', 
            justifyContent:'center', 
            overflow:'hidden', 
            // position:'relative',
            width:'100%',
            height:'auto',
            '&:hover': {
            backgroundColor: 'lightblue', // Hover background color
        },
        transition: 'background-color 0.3s ease', // Smooth transition
        }}
    >
        <Stack
            spacing={2}
        >
        <MuiImg 
            src={image} 
            sx={{
                // width:'100%',
                // height:'40%', 
                objectFit: 'cover'
            }} 
        />
        <Typography 
            variant="h3"
            sx={{
                px:'20px',
                textAlign:'center',
                width:'100%'
            }}
        >
            {titleText}
        </Typography>
        <Typography
            variant="body1"
            sx={{
                px:'20px',
                textAlign:'center',
                width:'100%'
            }}
        >
            {bodyText}
            </Typography>
        </Stack>
    </Paper>
  )
}

export default Card