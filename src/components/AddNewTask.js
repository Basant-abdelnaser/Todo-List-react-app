import { Button, Container, TextField } from "@mui/material";
import { useContext, useState } from "react";
import AllTasksContext from "./switches/allTasksContext";
import SimpleSnackbar from "./snackbar";

export default function AddNewTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useContext(AllTasksContext);
  const [opensenack, setOpenSnackbar] = useState(false);

  return (
    <div>
      <Container maxWidth="sm">
        <Button
          sx={{ fontFamily: "Tagesschrift" }}
          variant="contained"
          size="large"
          style={{ marginRight: "15px" }}
          onClick={() => {
            addTask(taskTitle);
            // localStorage.setItem("tasks", JSON.stringify(tasks));
            setTaskTitle("");

            setOpenSnackbar(true);
          }}
          disabled={taskTitle === ""}
        >
          Add
        </Button>

        <TextField
          id="outlined-basic"
          label="task name"
          variant="outlined"
          size="small"
          style={{ width: "82%" }}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </Container>
    
      <SimpleSnackbar
        title="Task added successfully"
        open={opensenack}
        onClose={() => setOpenSnackbar(false)}
      ></SimpleSnackbar>
    </div>
  );
}
