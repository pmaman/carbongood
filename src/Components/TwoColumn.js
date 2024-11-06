import { Grid2, Stack, Typography } from '@mui/material'
import {MuiImg} from '../Theme.tsx'
import React from 'react'

function TwoColumn({ image, title, body, side }) {
    const isLeft = side === 'left';

    return (
        <Grid2 
            container
            spacing={5}
            sx={{
                width:'100%',
                minHeight:'500px',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <Grid2 
                item 
                xs={6}
                sx ={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:'45%',
                    height:'100%',
                    overflow: 'hidden'
                }}
            >
                {/* display image in left column if side = left, else display text */}
                {isLeft ? (
                    <MuiImg
                        src={image}
                        sx={{
                            width:'100%',
                            height:'100%',
                            objectFit: 'cover'
                        }}
                    />
                ) : (
                    <Stack 
                        direction='column' 
                        spacing='15px' 
                        sx={{
                            display:'flex',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Typography variant='h3' sx={{whiteSpace: 'normal',}}>{title}</Typography>
                        <Typography variant='body1' sx={{whiteSpace: 'normal',}}>{body}</Typography>
                    </Stack>
                )}
            </Grid2>

            {/*text on left based on side prop*/}

            <Grid2 
                item 
                xs={6}
                sx ={{
                    display:'flex',
                    width:'45%',
                    height:'100%',
                    alignItems: 'left',
                    justifyContent: 'flex-start'
                }}
            >
                {/* display text in right column if side = left */}
                {isLeft ? (
                    <Stack 
                        direction='column' 
                        spacing='15px' 
                        sx={{
                            display:'flex',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Typography variant='h3' sx={{whiteSpace: 'normal',}}>{title}</Typography>
                        <Typography variant='body1' sx={{whiteSpace: 'normal',}}>{body}</Typography>
                    </Stack>
                ) : (
                    <MuiImg
                        src={image}
                        sx={{
                            width:'100%',
                            height:'100%',
                            objectFit: 'cover'
                        }}
                    />
                )}
            </Grid2>
        </Grid2>
    )
}

export default TwoColumn