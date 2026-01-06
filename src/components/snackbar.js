import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function SimpleSnackbar({ title, open, onClose }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "info.main" }}
          style={{ fontFamily: "Tagesschrift" }}
        >
          {title}
        </Alert>
      </Snackbar>
    </div>
  );
}
