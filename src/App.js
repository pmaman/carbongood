import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';
import { Grid2, CssBaseline  } from '@mui/material';
import Nav from "./Components/Nav";
import About from './Components/About';
import SolutionsOverview from "./Components/SolutionsOverview.js";
import CommercialUseCase from "./Components/CommercialUseCase.js";
import OpenSourceUseCase from "./Components/OpenSourceUseCase.js";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/about" replace />;
  }

  return (
    <>
      <CssBaseline />
        <Grid2 container >
          <Grid2 item xs={12}>
            <Nav />
          </Grid2>
          <Grid2 item xs={12}>
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path='/about' element={<About />} />
              <Route path='/solutions' element={<SolutionsOverview />} />
              <Route path="/CommercialUseCase" element={<CommercialUseCase />} />
              <Route path="/OpenSourceUseCase" element={<OpenSourceUseCase />} />
            </Routes>
          </Grid2>
          <Grid2 item xs={12}>
            <Footer zIndex={9999}/>
          </Grid2>
        </Grid2>
    </>
);
}

export default App;
