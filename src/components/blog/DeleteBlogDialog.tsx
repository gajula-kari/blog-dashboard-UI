import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type Props = {
  onClose: () => void;
  onSubmit: () => void;
};

export const DeleteBlogDialog = ({ onClose, onSubmit }: Props) => {
  return (
    <Dialog
      open
      onClose={onClose}
      sx={{ "& .MuiDialog-paper": { p: 1, width: "375px" } }}
    >
      <DialogTitle>Delete Blog</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this blog? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="error" sx={{ fontWeight: "bold" }}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
