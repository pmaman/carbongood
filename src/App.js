import { Routes, Route } from "react-router-dom";
import './App.css';
import { Grid2, ThemeProvider, CssBaseline  } from '@mui/material';
import theme from './Theme.tsx';
import Nav from "./Components/Nav";
import About from './Components/About';
import Solutions from "./Components/Solutions";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
        <Grid2 container>
          <Grid2 item sm={12}>
            <Nav />
          </Grid2>
          <Grid2 item sm={12}>
            <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/solutions' element={<Solutions />} />
            </Routes>
          </Grid2>
        </Grid2>
    </ThemeProvider>
  );
}

export default App;
