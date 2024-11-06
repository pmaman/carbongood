import React from 'react'
import { Grid2, Stack, Typography, Link } from '@mui/material'
import { MuiImg } from '../Theme.tsx';
import xLogo from '../Logo/x-logo-black.png'
import linkedinLogo from '../Logo/linkedin-logo-black.png'

function Footer() {
  return (
    <Grid2 
        container 
        xs={12}
        sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '10px',
            mx: '40px',
            backgroundColor: 'lightgray',
            margin: '0px'
        }}
    > 
        < Grid2 item>
            <Typography 
            variant="body2" 
            sx={{ 
                textAlign: 'center', 
                justifyContent:'center',
                display: 'flex', 
            }}
        >
                © HCCAS Ltd 2014 - 2024, and © Ecocity Builders 2021 - 2024
            </Typography>
        </Grid2>
        < Grid2 item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Stack direction='row' spacing='20px'>
            <Link 
                    href="https://twitter.com/@gas2green" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <MuiImg
                        src={xLogo}
                        sx= {{
                            width: '20px',
                            height: 'auto',
                            justifyContent: 'right',
                            alignItems: 'center',
                            color:'black'               
                        }}
                    />
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/mark-everson-hccas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <MuiImg
                        src={linkedinLogo}
                        sx= {{
                            width: '20px',
                            height: 'auto',
                            justifyContent: 'right',
                            alignItems: 'center',
                            color:'black'               
                        }}
                    />
                </Link>
            </Stack>
        </Grid2>
      </Grid2>
  );
}

export default Footer