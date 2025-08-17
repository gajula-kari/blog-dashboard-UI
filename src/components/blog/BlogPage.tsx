import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Card,
  CardContent,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { BlogData } from "../../common/type";
import PublishIcon from "@mui/icons-material/Publish";
import { Status } from "../../common/constants";
import { useState, useEffect } from "react";

type BlogPageProps = {
  blogs: BlogData[];
  updateBlogs: (blog: BlogData) => void;
};

export const BlogPage = ({ blogs, updateBlogs }: BlogPageProps) => {
  const [updated, setUpdated] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    if (updated) {
      const timer = setTimeout(() => setUpdated(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [updated]);

  useEffect(() => {
    document.title = `${blog?.title} - Blog Management Dashboard`;
  }, [blog?.title]);

  const onPublishIconClick = () => {
    const updatedBlog = {
      ...blog,
      status: Status.Published,
      date: new Date().toISOString().split("T")[0],
    } as BlogData;
    updateBlogs(updatedBlog);
    setUpdated(true);
  };

  if (!blog) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Blog not found.</Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mb: 3, textTransform: "none" }}
        variant="outlined"
        color="primary"
      >
        Back
      </Button>

      <Card elevation={4} sx={{ p: { xs: 2, sm: 2 } }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">{blog.title}</Typography>

            {blog.status === "Draft" && (
              <Tooltip title="Publish Blog">
                <IconButton
                  sx={{
                    backgroundColor: "secondary.light",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                    width: 32,
                    height: 32,
                    "& svg": { fontSize: "18px" },
                  }}
                  size="small"
                  onClick={() => onPublishIconClick()}
                >
                  <PublishIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            By {blog.author} |{" "}
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.1s ease-in-out",
                transform: updated ? "scale(1.05)" : "scale(1)",
              }}
            >
              {new Date(blog.date).toLocaleDateString()}
            </span>
          </Typography>
          <Chip
            label={blog.status}
            color={blog.status === "Published" ? "success" : "warning"}
            size="medium"
            sx={{
              mb: 3,
              transition: "transform 0.1s ease-in-out",
              transform: updated ? "scale(1.05)" : "scale(1)",
            }}
          />

          <Divider sx={{ mb: 3 }} />
          <Box>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.6,
                fontSize: "0.9rem",
                color: "text.primary",
              }}
            >
              {blog.content}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
