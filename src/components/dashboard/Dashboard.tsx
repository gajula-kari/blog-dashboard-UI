import * as React from "react";
import {
  Paper,
  TextField,
  Stack,
  Typography,
  useTheme,
  Divider,
  IconButton,
  Container,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "./table/CustomTable";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { AddEditBlogDialog } from "../blog/AddEditBlogDialog";
import { DeleteBlogDialog } from "../blog/DeleteBlogDialog";
import type { BlogData } from "../../common/type";
import { Action } from "../../common/constants";
import CloseIcon from "@mui/icons-material/Close";

export const Dashboard = ({
  blogs,
  updateBlogs,
}: {
  blogs: BlogData[];
  updateBlogs: (a: string, b: BlogData) => void;
}) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [showAddEdit, setShowAddEdit] = React.useState(false);
  const [showDelete, setShowDelete] = React.useState(false);
  const [selected, setSelected] = React.useState<BlogData | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const filteredRows = React.useMemo(() => {
    const searchValueLowerCase = searchValue.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchValueLowerCase) ||
        blog.author.toLowerCase().includes(searchValueLowerCase)
    );
  }, [blogs, searchValue]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {showAddEdit && (
        <AddEditBlogDialog
          onSubmit={(action, blog) => {
            updateBlogs(action, blog);
            setSelected(null);
            setShowAddEdit(false);
          }}
          onClose={() => {
            setSelected(null);
            setShowAddEdit(false);
          }}
          blogData={selected || undefined}
        />
      )}
      {showDelete && (
        <DeleteBlogDialog
          onSubmit={() => {
            if (selected) updateBlogs(Action.Delete, selected);
            setSelected(null);
            setShowDelete(false);
          }}
          onClose={() => {
            setSelected(null);
            setShowDelete(false);
          }}
        />
      )}

      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack direction="row" sx={{ mb: 2, alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Blogs
          </Typography>
          <TextField
            label="Search by Title or Author"
            size="small"
            sx={{ ml: "auto" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            slotProps={{
              input: {
                endAdornment: searchValue ? (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setSearchValue("")}
                      aria-label="clear search"
                      edge="end"
                    >
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ) : undefined,
              },
            }}
          />
          <Divider orientation="vertical" sx={{ mx: 1, height: 35 }} />
          <IconButton
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: "white",
            }}
            onClick={() => setShowAddEdit(true)}
          >
            <AddBoxOutlinedIcon />
          </IconButton>
        </Stack>
        <CustomTable
          filteredRows={filteredRows}
          handleEditIconClick={(b) => {
            setSelected(b);
            setShowAddEdit(true);
          }}
          handleDeleteIconClick={(b) => {
            setSelected(b);
            setShowDelete(true);
          }}
          viewBlog={(id) => navigate(`/view/${id}`)}
        />
      </Paper>
    </Container>
  );
};
