import { createMuiTheme } from "@material-ui/core/styles";

//const createMuiTheme = () => {};

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab:{
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h3: {
      fontWeight: 300,
    },
    estimate:{
      fontFamily:"Pacifico",
      fontSize:"1rem",
      textTransform:"none",
      color:"white"
    }
  },

});
