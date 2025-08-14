import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { BlogPage } from "./components/BlogPage";
import { useState, useEffect } from "react";
import { initialRows, type BlogData } from "./utils";
import { AppBar, Toolbar, Typography, ToggleButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, blueGrey, grey } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: teal[600] }, // #00897B (close to your teal)
    secondary: { main: blueGrey[600] }, // #546E7A
    background: { default: grey[50] }, // #FAFAFA
    text: {
      primary: blueGrey[900], // #263238
      secondary: blueGrey[600], // #607D8B
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: teal[300] }, // #4DB6AC
    secondary: { main: blueGrey[300] }, // #90A4AE
    background: { default: grey[900] }, // #1E1E1E
    text: {
      primary: grey[200], // #ECEFF1
      secondary: blueGrey[200], // #B0BEC5
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState<BlogData[]>(() => {
    const saved = localStorage.getItem("blogs");
    if (saved) {
      return JSON.parse(saved);
    } else {
      localStorage.setItem("blogs", JSON.stringify(initialRows));
      return initialRows;
    }
  });

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const updateBlogs = (action: string, newBlog: BlogData) => {
    if (action === "add") {
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    } else if (action === "edit") {
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === newBlog.id ? { ...blog, ...newBlog } : blog
        )
      );
    } else if (action === "delete") {
      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog.id !== newBlog.id)
      );
    }
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <AppBar position="fixed" color="default" elevation={1}>
          <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
            <Typography variant="h4">Blog Dashboard</Typography>
            <ToggleButton
              value="theme"
              selected={darkMode}
              onChange={handleThemeToggle}
            >
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </ToggleButton>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                blogs={blogs}
                updateBlogs={(action: string, newBlog: BlogData) => {
                  updateBlogs(action, newBlog);
                }}
              />
            }
          />
          <Route path="/view/:id" element={<BlogPage blogs={blogs} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
