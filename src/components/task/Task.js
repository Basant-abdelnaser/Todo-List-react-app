import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { IconButton } from "@mui/material";
import "./Task.css";
import AllTasksContext from "../switches/allTasksContext";
import { useContext, useState } from "react";
import { DeletePopup, Popup } from "../popup";
import SimpleSnackbar from "../snackbar";

export default function Task({ taskTitle, taskDesc, isDone, index }) {
  const { toggleTask } = useContext(AllTasksContext);
  const [openPopup, setOpenPopup] = useState(false);
  const [deltePopup, setDeletePopup] = useState(false);
  const [editSnack, setEditSnack] = useState(false);
  const [deleteSnack, setDeleteSnack] = useState(false);

  const closePopupHandler = () => setOpenPopup(false);

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "primary.main",
        color: "info.main",
        borderRadius: 2,
        transition: "all 0.5s",
        ":hover": {
          paddingTop: "10px",
          paddingBottom: "10px",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Tagesschrift",
              textDecoration: isDone ? "line-through" : "none",
            }}
          >
            {taskTitle}
          </h2>
          <p style={{ fontFamily: "Tagesschrift" }}>{taskDesc}</p>
        </div>
        <Stack direction="row" spacing={2}>
          <IconButton
            size="small"
            sx={{
              bgcolor: "info.main",
              ":hover": { bgcolor: "secondary.main" },
            }}
            onClick={() => {
              // deleteTask(index);
              setDeletePopup(true);
            }}
          >
            <DeleteRoundedIcon color="error"></DeleteRoundedIcon>
          </IconButton>

          <IconButton
            onClick={() => {
              toggleTask(index);
            }}
            size="small"
            sx={
              isDone
                ? {
                    bgcolor: "success.main",
                    ":hover": { bgcolor: "secondary.main" },
                  }
                : {
                    bgcolor: "info.main",
                    ":hover": { bgcolor: "secondary.main" },
                  }
            }
          >
            <CheckRoundedIcon
              color={isDone ? "info" : "success"}
            ></CheckRoundedIcon>
          </IconButton>

          <IconButton
            size="small"
            sx={{
              bgcolor: "info.main",
              ":hover": { bgcolor: "secondary.main" },
            }}
            onClick={() => setOpenPopup(true)}
          >
            <ModeEditOutlineRoundedIcon color="primary"></ModeEditOutlineRoundedIcon>
          </IconButton>
        </Stack>
      </Stack>

      <Popup
        taskTitle={taskTitle}
        taskDesc={taskDesc}
        openpopup={openPopup}
        colsePopup={closePopupHandler}
        index={index}
        setEditSnack={() => setEditSnack(true)}
      ></Popup>

      <DeletePopup
        openpopup={deltePopup}
        colsePopup={() => setDeletePopup(false)}
        index={index}
        setDeleteSnack={() => setDeleteSnack(true)}
      ></DeletePopup>

      <SimpleSnackbar
        title="task edited successfully !"
        open={editSnack}
        onClose={() => setEditSnack(false)}
      ></SimpleSnackbar>

      <SimpleSnackbar
        title="task deleted successfully!"
        open={deleteSnack}
        onClose={() => setDeleteSnack(false)}
      ></SimpleSnackbar>
    </Container>
  );
}
