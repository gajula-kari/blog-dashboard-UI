import { AppBar, Toolbar, Typography, ToggleButton, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../ThemeProviderWrapper";

export const AppToolbar = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <AppBar position="sticky" sx={{ height: 80, justifyContent: "center" }}>
      <Toolbar>
        <Typography variant="h5">Blog Dashboard</Typography>
        <Box sx={{ ml: "auto" }}>
          <ToggleButton
            value="theme"
            selected={darkMode}
            onChange={toggleDarkMode}
          >
            {darkMode ? (
              <LightModeIcon sx={{ color: "white" }} />
            ) : (
              <DarkModeIcon sx={{ color: "black" }} />
            )}
          </ToggleButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
