import { createTheme } from "@mui/material";
import { styled } from '@mui/system';

export const MuiImg = styled('img')(({ theme }) => ({
    width: '100%',  // Make the image take 100% width of its container
    height: 'auto',  // Maintain aspect ratio
    objectFit: 'cover',  // Cover the container area
    alignItems:"center"
}));

const theme = createTheme({
    palette:{
        primary: {
            main:'#fff',
            contrastText: "#000",
        },
        secondary:{
            main:'#3B9D95'
        }
    },
    typography:{
        fontFamily: [
            'Futura Md Bt',
            'Inter',
            'Arial'
          ].join(','),
        h1:{
            fontSize: '3rem',
            fontWeight: '700',
            textAlign: 'center'
        },
        h2:{
            fontSize: '2rem',
            fontWeight: '400',
            textAlign: 'center'
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: '600',
            textAlign: 'center'
        },
          body1: {
            fontSize: '1rem',
            fontWeight: '500'
        }
    },
    components:{
        MuiCssBaseline: {
            styleOverrides: {
                // Override slick-carousel dots styles
                '.slick-dots li button': {
                    width: '20px',     // Set custom width for dots
                    height: '20px',    // Set custom height for dots
                    borderRadius: '50%', // Keep dots circular
                },
                '.slick-dots li button:before': {
                    fontSize: '20px',  // Adjust the size of the dot
                    color: '#000',     // Set color for dots
                },
                '.slick-dots li.slick-active button:before': {
                    color: '#ff0000',  // Active dot color
                },
            },
        },
        MuiContainer:{
            styleOverrides:{
                root:{
                    //backgroundColor: '#fff'
                }
            }
        },
        MuiGrid:{
            styleOverrides: {
                root: {
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'0',
                    paddingLeft:'0px !important'
                },
                item:{
                    padding:'0px'
                },
                container:{
                    padding:'0px',
                    position:'relative'
                }
            },
        },
        MuiTabs:{
            styleOverrides:{
                root:{
                    display: 'flex',
                    justifyContent: 'center',
                    position:'sticky',
                    top:'68.5px',
                    zIndex:1000,
                    backgroundColor:'#fff'
                },
                flexContainer:{
                    justifyContent:'center'
                }
            }
        },
        MuiTab:{
            styleOverrides:{
                root:({ theme }) => ({
                    ...theme.typography.h5,
                    textTransform:'none',
                    borderBottom: '4px solid #ffffff', // Border bottom stroke for active tab
                    '&.Mui-selected': {
                    color: '#3B9D95', // Active tab color
                    borderBottom: '4px solid #3B9D95', // Border bottom stroke for active tab]
                }
                }),
            }
        },
        MuiButtonBase:{
            styleOverrides:{
                root:{
                    // justifyContent:'space-between',                    
                    // '&.Mui-selected': {
                    //     borderBottom:'2px', //TODO - center tabs and get border rendering properly
                    //     borderColor:'#3B9D95',
                    //     backgroundColor: '#3B9D95',
                    //     borderRadius:'5px 5px 0px 0px',
                    //     opacity:1,
                    // }
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    borderRadius:'10px',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingBottom:'20px',
                    //boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.15)'
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    borderRadius:'0px',
                    margin:'0px',
                    padding:'0px'
                }
            }
        },
        MuiStack:{
            styleOverrides:{
                root:{
                    alignItems:'center',
                    justifyContent:'space-between'
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    //width:'100%',
                    textAlign:'center'
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root:{
                    color: '#1a73e8',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration:'underline',
                    },
                    fontWeight: 600,
                }
            }
        }
    }
});

export default theme;

