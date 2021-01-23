import { createMuiTheme } from "@material-ui/core";
import { componentPrimaryColor, mainTextColor, vibrantBlue } from "./colors";
// import Graphik from "./fonts/Graphik-Regular-Web.woff2";

export default createMuiTheme({
  props: {
    MuiRadio: {
      color: "primary",
    },
    MuiCheckbox: {
      color: "primary",
    },
  },
  palette: {
    primary: {
      main: vibrantBlue,
    },
    text: {
      primary: mainTextColor,
    },
    // secondary: {
    //   main: green[500],
    // },
  },
  typography: {
    allVariants: {
      color: mainTextColor,
    },
    fontFamily: "futura-pt, sans-serif",
  },
});
