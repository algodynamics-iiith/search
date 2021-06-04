import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(69, 90, 100)",
    },
    secondary: {
      main: "rgb(120, 144, 156)",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
