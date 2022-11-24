import React from "react";
import Header from "../components/ui/Header";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
