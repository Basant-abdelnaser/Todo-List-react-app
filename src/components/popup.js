import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Stack, TextField } from "@mui/material";
import AllTasksContext from "./switches/allTasksContext";
import { useContext } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// con us dialog component

export function Popup({
  taskTitle,
  taskDesc,
  openpopup,
  colsePopup,
  index,
  setEditSnack,
}) {
  const { editTask } = useContext(AllTasksContext);
  //   const [open, setOpen] = React.useState(false);
  const [taskData, settaskData] = useState({
    taskTitle: taskTitle,
    taskDesc: taskDesc,
  });

  return (
    <div>
      <Modal
        open={openpopup}
        onClose={colsePopup}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Stack direction="column" spacing={2}>
            <h2>Edit Task</h2>
            <TextField
              id="outlined-basic"
              label="task name"
              variant="outlined"
              size="small"
              style={{ width: "82%" }}
              value={taskData.taskTitle}
              onChange={(e) =>
                settaskData({ ...taskData, taskTitle: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="task description"
              variant="outlined"
              size="small"
              style={{ width: "82%" }}
              value={taskData.taskDesc}
              onChange={(e) =>
                settaskData({ ...taskData, taskDesc: e.target.value })
              }
            />
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  colsePopup();
                }}
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  editTask(index, taskData);
                  colsePopup();
                  setEditSnack();
                }}
              >
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export function DeletePopup({ openpopup, colsePopup, index, setDeleteSnack }) {
  const { deleteTask } = useContext(AllTasksContext);
  return (
    <div>
      <Modal
        open={openpopup}
        onClose={colsePopup}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Stack direction="column" spacing={2}>
            <h2>Are you sure you want to delete this task?</h2>
            <p>this action cannot be undone!</p>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  colsePopup();
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  deleteTask(index);
                  colsePopup();
                  setDeleteSnack();
                }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
