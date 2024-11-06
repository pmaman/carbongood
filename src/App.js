import { Routes, Route } from "react-router-dom";
import './App.css';
import { Grid2, ThemeProvider, CssBaseline  } from '@mui/material';
import theme from './Theme.tsx';
import Nav from "./Components/Nav";
import About from './Components/About';
import SolutionCards from "./Components/SolutionCards.js";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
        <Grid2 container >
          <Grid2 item xs={12}>
            <Nav />
          </Grid2>
          <Grid2 item xs={12}>
            <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/solutions' element={<SolutionCards />} />
            </Routes>
          </Grid2>
          <Grid2 item xs={12}>
            <Footer zIndex={9999}/>
          </Grid2>
        </Grid2>
    </ThemeProvider>
  );
}

export default App;
