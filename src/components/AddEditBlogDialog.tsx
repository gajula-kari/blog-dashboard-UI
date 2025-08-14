import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import type { BlogData } from "../utils";
import { Stack, MenuItem } from "@mui/material";

type AddEditBlogDialogProps = {
  onClose: () => void;
  onSubmit: (action: string, formData: BlogData) => void;
  blogData?: Row;
};

export default function AddEditBlogDialog({
  onClose,
  onSubmit,
  blogData,
}: AddEditBlogDialogProps) {
  const [formData, setFormData] = React.useState<BlogData>({
    id: crypto.randomUUID(),
    title: "",
    author: "",
    content: "",
    date: new Date().toISOString().split("T")[0], // "YYYY-MM-DD"
    status: "Draft",
  });
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const action = blogData == null ? "Add" : "Edit";

  React.useEffect(() => {
    if (blogData) {
      setFormData({
        ...blogData,
        date: blogData.date.split("T")[0], // Ensure date is in "YYYY-MM-DD" format
      });
    }
  }, [blogData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormDataUnchanged = React.useMemo(() => {
    if (action === "Edit" && blogData) {
      const { date: _formDate, ...formWithoutDate } = formData;
      const { date: _blogDate, ...blogWithoutDate } = blogData;

      return (
        JSON.stringify(formWithoutDate) === JSON.stringify(blogWithoutDate)
      );
    }
    return false;
  }, [action, formData, blogData]);

  const validate = () => {
    setErrors({});
    const tempErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) {
      tempErrors.title = "Title is required";
    } else if (formData.title.length > 50) {
      tempErrors.title = "Title cannot be more than 50 characters.";
    } else if (!/[A-Za-z]/.test(formData.title)) {
      tempErrors.title = "Title must contain at least one letter.";
    }

    if (!formData.author.trim()) {
      tempErrors.author = "Author is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.author)) {
      tempErrors.author = "Only alphabets allowed";
    }

    if (!formData.date) {
      tempErrors.date = "Date is required";
    }

    if (!formData.content) {
      tempErrors.content = "Content is required.";
    } else if (!/[A-Za-z]/.test(formData.content)) {
      tempErrors.content = "Content must contain at least one letter.";
    }

    setErrors(tempErrors);
    console.log("Validation errors:", tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted with data:", formData);
      onSubmit(action.toLowerCase(), formData);
    }
  };

  return (
    <React.Fragment>
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>{action.concat(" Dialog")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {blogData == null
              ? "Add a new blog post by entering the details below."
              : "Edit the blog post details below."}
          </DialogContentText>
          <form onSubmit={handleSubmit} id="blog-form">
            <Stack spacing={2} sx={{ width: "35vw" }}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                error={!!errors.title}
                helperText={errors.title}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                fullWidth
                error={!!errors.author}
                helperText={errors.author}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                error={!!errors.date}
                helperText={errors.date}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                multiline
                rows={6}
                error={!!errors.content}
                helperText={errors.content}
                sx={{ mb: 2 }}
                fullWidth
              />

              <TextField
                select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Published">Published</MenuItem>
              </TextField>
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" form="blog-form" disabled={isFormDataUnchanged}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
