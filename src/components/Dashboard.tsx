import * as React from "react";
import { Paper, TextField, Stack, Button } from "@mui/material";
import { type BlogData } from "../utils";
import AddEditBlogDialog from "./AddEditBlogDialog";
import DeleteBlogDialog from "./DeleteBlogDialog";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "./CustomTable";

type DashboardProps = {
  blogs: BlogData[];
  updateBlogs: (action: string, newBlog: BlogData) => void;
};

export const Dashboard = ({ blogs, updateBlogs }: DashboardProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [showAddEditDialog, setShowAddEditDialog] = React.useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = React.useState<BlogData | null>(null);

  const navigate = useNavigate();

  const filteredRows = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleDeleteIconClick = (blog: BlogData) => {
    setSelectedBlog(blog);
    setShowDeleteDialog(true);
  };

  const handleEditIconClick = (blog: BlogData) => {
    setSelectedBlog(blog);
    setShowAddEditDialog(true);
  };

  const handleViewIconClick = (blogId: string) => {
    navigate(`/view/${blogId}`);
  };

  return (
    <>
      {showAddEditDialog && (
        <AddEditBlogDialog
          onSubmit={(action: string, formData: BlogData) => {
            updateBlogs(action, formData);
            setSelectedBlog(null);
            setShowAddEditDialog(false);
          }}
          onClose={() => {
            setSelectedBlog(null);
            setShowAddEditDialog(false);
          }}
          blogData={selectedBlog || undefined}
        />
      )}

      {showDeleteDialog && (
        <DeleteBlogDialog
          onSubmit={() => {
            updateBlogs("delete", selectedBlog!);
            setSelectedBlog(null);
            setShowDeleteDialog(false);
          }}
          onClose={() => {
            setSelectedBlog(null);
            setShowDeleteDialog(false);
          }}
        />
      )}

      <Paper sx={{ width: "100%", overflow: "hidden", padding: 2, mt: 8 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Search by Title or Author"
            variant="outlined"
            size="small"
            sx={{ flex: 5 }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={() => {
              setSelectedBlog(null);
              setShowAddEditDialog(true);
            }}
            sx={{ flex: 1 }}
          >
            Add Blog
          </Button>
        </Stack>
        <CustomTable
          filteredRows={filteredRows}
          handleEditIconClick={handleEditIconClick}
          handleDeleteIconClick={handleDeleteIconClick}
          handleViewIconClick={handleViewIconClick}
        />
      </Paper>
    </>
  );
};
