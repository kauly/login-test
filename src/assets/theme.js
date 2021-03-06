import { createMuiTheme } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export default theme;
