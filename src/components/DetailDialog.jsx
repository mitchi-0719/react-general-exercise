import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const DetailDialog = ({ item, dialogOpen, setDialogOpen }) => {
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      <DialogTitle>{item.character}</DialogTitle>
      <DialogContent>
        <img src={item.image} alt={item.character} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
