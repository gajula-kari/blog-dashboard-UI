import { createTheme } from "@mui/material/styles";
import { teal, blueGrey, grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: teal[600] },
    secondary: { main: blueGrey[600] },
    background: { default: grey[100] },
    text: { primary: blueGrey[900], secondary: blueGrey[600] },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: teal[300] },
    secondary: { main: blueGrey[300] },
    background: { default: grey[900] },
    text: { primary: grey[200], secondary: blueGrey[200] },
  },
});
