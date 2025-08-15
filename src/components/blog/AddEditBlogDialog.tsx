import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  MenuItem,
} from "@mui/material";
import { validateBlog } from "../../common/validation";
import { Action, Status } from "../../common/constants";
import type { BlogData } from "../../common/type";

type Props = {
  onClose: () => void;
  onSubmit: (action: string, formData: BlogData) => void;
  blogData?: BlogData;
};

export const AddEditBlogDialog = ({ onClose, onSubmit, blogData }: Props) => {
  const isEdit = !!blogData;

  const [formData, setFormData] = React.useState<BlogData>(
    blogData || {
      id: crypto.randomUUID(),
      title: "",
      author: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      status: Status.Draft,
    }
  );

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateBlog(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const trimmedFormData = {
        ...formData,
        title: formData.title.trim(),
        author: formData.author.trim(),
        content: formData.content.trim(),
      };
      onSubmit(isEdit ? Action.Edit : Action.Add, trimmedFormData);
    }
  };

  const isFormUnchanged = React.useMemo(() => {
    if (!isEdit || !blogData) return false;

    return (
      formData.title.trim() === blogData.title &&
      formData.author.trim() === blogData.author &&
      formData.content.trim() === blogData.content &&
      formData.status.trim() === blogData.status
    );
  }, [isEdit, formData, blogData]);

  return (
    <Dialog
      open
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": { p: 1, width: "500px" },
      }}
    >
      <DialogTitle>
        {isEdit ? Action.Edit.concat(" Blog") : Action.Add.concat(" Blog")}
      </DialogTitle>
      <DialogContent>
        <form id="blog-form" onSubmit={handleSubmit}>
          <Stack spacing={1.5} sx={{ mt: 2 }}>
            <TextField
              autoFocus
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
              fullWidth
            />
            <Stack direction={"row"} spacing={1.5}>
              <TextField
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                error={!!errors.author}
                helperText={errors.author}
                fullWidth
              />
              <TextField
                label="Date"
                name="date"
                type="date"
                slotProps={{
                  input: {
                    inputProps: {
                      min: new Date().toISOString().split("T")[0],
                    },
                  },
                }}
                value={formData.date}
                onChange={handleChange}
                error={!!errors.date}
                helperText={errors.date}
                fullWidth
              />
            </Stack>
            <TextField
              label="Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              multiline
              rows={10}
              error={!!errors.content}
              helperText={errors.content}
              fullWidth
            />
            <TextField
              select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={Status.Draft}>{Status.Draft}</MenuItem>
              <MenuItem value={Status.Published}>{Status.Published}</MenuItem>
            </TextField>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          type="submit"
          form="blog-form"
          color="primary"
          disabled={isFormUnchanged}
          sx={{ fontWeight: "bold" }}
        >
          {isEdit ? "Update" : Action.Add}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
