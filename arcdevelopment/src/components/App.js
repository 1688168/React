import React from "react";
import Header from "../components/ui/Header";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/customsoftware" element={<div>Custom Software</div>} />
        <Route path="/mobileapps" element={<div>Mobileapps</div>} />
        <Route path="/websites" element={<div>Website</div>} />
        <Route path="/revolution" element={<div>Revolution</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/estimate" element={<div>Estimate</div>} />
      </Routes>
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
