import React from 'react'
import {Grid2, Stack, Typography, Link} from '@mui/material'
import { MuiImg } from '../Theme.tsx';
import MitClimateLogo from '../Logo/logo-climate-colab_1.png';
import MitSolveLogo from '../Logo/MIT solve logo.png';
import EcoCityLogo from '../Logo/ecocity logo.jpeg';

function ThreeColumnSection() {
  return (
    <Grid2
      container
      xs={12}
      sx={{
        alignItems:'center',
        justifyContent:'center',
        py:'40px',
        mb:'40px'
      }}
    >
      <Grid2 item xs={12}>
        <Stack direction="column" spacing={7}>
          <Typography variant="h2">
            Collaborations and Callouts
          </Typography>
          <Stack direction='row' spacing={10} alignItems='flex-start'>
            <Stack direction='column' spacing={3} sx ={{width:'33%'}}>
              <MuiImg 
                src={MitClimateLogo}
                sx={{width:'auto', height:'40px'}}
                />
              <Typography variant="body1">
                CarbonGood made semi-finalist in {' '}
                <Link href="https://climatecolab.org/contests/2014/energy-supply/c/proposal/1308911" target="_blank" rel="noopener noreferrer">
                ClimateCoLab 2014
                </Link>{' '}
              </Typography>
            </Stack>
            <Stack direction='column' spacing={3} sx ={{width:'33%'}}>
              <MuiImg 
                src={MitSolveLogo}
                sx={{width:'auto', height:'40px'}} 
                />
              <Typography variant="body1">
                CarbonGood made finalist at {' '}
                <Link href="https://www.youtube.com/watch?v=k3QXHNK_5OE&feature=youtu.be&themeRefresh=1" target="_blank" rel="noopener noreferrer">
                  MIT to Solve in 2016
                </Link>{' '}
              </Typography>
            </Stack>
            <Stack direction='column' spacing={3} sx ={{width:'33%'}}>
              <MuiImg 
                src={EcoCityLogo}
                sx={{width:'auto', height:'40px'}}
                />
              <Typography variant="body1">
                HCCAS Ltd is proud to Partner with {' '}
                <Link href="https://ecocitybuilders.org/" target="_blank" rel="noopener noreferrer">
                Ecocity Builders
                </Link>{' '}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid2>
    </Grid2>
  )
}

export default ThreeColumnSection