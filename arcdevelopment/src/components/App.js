import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<div style={{ height: "2000px" }}>Home</div>}
          />
          <Route exact path="/services" element={<div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            element={<div>Custom Software</div>}
          />
          <Route exact path="/mobileapps" element={<div>Mobileapps</div>} />
          <Route exact path="/websites" element={<div>Website</div>} />
          <Route exact path="/revolution" element={<div>Revolution</div>} />
          <Route exact path="/about" element={<div>About</div>} />
          <Route exact path="/contact" element={<div>Contact</div>} />
          <Route exact path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
