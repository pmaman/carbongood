import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import {MuiImg} from '../Theme.tsx';
import xIcon from '../Logo/x-logo-black.png'

function DynamicFooter() {
  return (
    <Box
        sx={{
            //minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
    >
        <Grid2
        container
        sx={{
            width: '100%',
            position: 'relative',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: 'lightgray',
            margin: '0px',
            backgroundColor: 'lightgray',
            //mt: 'auto', // Pushes the footer to the bottom when the content is less
        }}
        >
            <Grid2 
                item 
                xs={12} 
                sx={{
                    textAlign: 'center', 
                    justifyContent:'center',
                    display: 'flex', 
                }}
            >
            <Typography variant="body1" align="center">
                © HCCAS Ltd 2014 - 2024, and © Ecocity Builders 2021 - 2024
            </Typography>
            </Grid2>
            < Grid2 item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <MuiImg
                    src={xIcon}
                    sx= {{
                        width: '20px',
                        height: 'auto',
                        justifyContent: 'right',
                        alignItems: 'center'               
                    }}
                >
                </MuiImg>
            </Grid2>
        </Grid2>
    </Box>
  );
}

export default DynamicFooter