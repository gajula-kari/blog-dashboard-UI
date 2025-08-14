import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Container,
} from "@mui/material";
import type { BlogData } from "../utils";

export interface BlogPageProps {
  blogs: BlogData[];
}

export const BlogPage = ({ blogs }: BlogPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Blog not found</Typography>
        <Button sx={{ mt: 2 }} variant="outlined" onClick={() => navigate("/")}>
          Back to Dashboard
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4, minHeight: "70vh", minWidth: "80vh" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4" fontWeight="bold">
            {blog.title}
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Back
          </Button>
        </Stack>

        <Typography variant="subtitle1" color="text.secondary">
          Author: {blog.author}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Date: {blog.date} | Status: {blog.status}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {blog.content}
        </Typography>
      </Paper>
    </Container>
  );
};
