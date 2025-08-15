import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";
import { AppToolbar } from "./components/AppToolbar";
import { BlogPage } from "./components/blog/BlogPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import { initialRows } from "./data/mockData";
import { Action } from "./common/constants";
import type { BlogData } from "./common/type";

export const App = () => {
  const loadBlogs = () => {
    try {
      const saved = localStorage.getItem("blogs");
      return saved ? JSON.parse(saved) : initialRows;
    } catch {
      return initialRows;
    }
  };

  const [blogs, setBlogs] = useState<BlogData[]>(loadBlogs);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const updateBlogs = useCallback((action: string, blog: BlogData) => {
    setBlogs((prev) => {
      let updatedBlogs: BlogData[] = prev;
      let message = "";

      switch (action) {
        case Action.Add:
          updatedBlogs = [...prev, blog];
          message = "Blog added successfully!";
          break;
        case Action.Edit:
          updatedBlogs = prev.map((b) => (b.id === blog.id ? blog : b));
          message = "Blog updated successfully!";
          break;
        case Action.Delete:
          updatedBlogs = prev.filter((b) => b.id !== blog.id);
          message = "Blog deleted successfully!";
          break;
        default:
          return prev;
      }

      setSnackbar({ open: true, message });
      return updatedBlogs;
    });
  }, []);

  return (
    <>
      <AppToolbar />
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
        <Route
          path="/view/:id"
          element={
            <BlogPage
              blogs={blogs}
              updateBlogs={(newBlog: BlogData) => {
                updateBlogs(Action.Edit, newBlog);
              }}
            />
          }
        />
      </Routes>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ open: false, message: "" })}
      >
        <Alert
          severity="success"
          sx={{ border: "1px solid", borderColor: "success.main" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
