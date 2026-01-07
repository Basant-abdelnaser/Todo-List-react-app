import { Container, Stack } from "@mui/material";
import Task from "./task/Task";
import AllTasksContext from "./switches/allTasksContext";
import { useContext, useEffect, useState } from "react";
import { DeletePopup, Popup } from "./popup";
import SimpleSnackbar from "./snackbar";

export default function AllTasks() {
  const { tasks } = useContext(AllTasksContext);
  //   const storedTasks = localStorage.getItem("tasks");
  //   console.log(storedTasks);
  //   console.log("storedd", ...JSON.parse(storedTasks));
  //   console.log("ajaj");

  const [selectedTask, setSelectedTask] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [snack, setSnack] = useState({ open: false, text: "" });

  useEffect(() => {
    console.log("calling");
    // tasks.push(...JSON.parse(storedTasks));
  }, []);
  //   if (tasks.length === 0 && storedTasks) {
  //     // tasks.push(...JSON.parse(storedTasks));
  //     //   setTasks(JSON.parse(storedTasks));
  //     console.log("tasks", tasks);
  //     console.log("stored", storedTasks);
  //   }
  const mappedTasks = tasks.map((t, index) => (
    <Task
      key={index}
      taskTitle={t.taskTitle}
      taskDesc={t.taskDesc}
      isDone={t.isDone}
      index={index}
      onEdit={(i) => {
        setSelectedTask(i);
        // console.log("selected task i", i);
        setEditOpen(true);
      }}
      onDelete={(i) => {
        setSelectedTask(i);
        setDeleteOpen(true);
      }}
    ></Task>
  ));
  return (
    <Container maxWidth="sm" style={{ marginBottom: "20px" }}>
      {/* <h1>All Tasks</h1> */}
      <Stack
        direction="column"
        spacing={3}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {mappedTasks}
      </Stack>
      {tasks[selectedTask] && (
        <Popup
          openpopup={editOpen}
          task={tasks[selectedTask]}
          index={selectedTask}
          colsePopup={() => setEditOpen(false)}
          onSuccess={() =>
            setSnack({ open: true, text: "Task edited successfully!" })
          }
        />
      )}
      {tasks[selectedTask] && (
        <DeletePopup
          openpopup={deleteOpen}
          index={selectedTask}
          colsePopup={() => setDeleteOpen(false)}
          onSuccess={() =>
            setSnack({ open: true, text: "Task deleted successfully!" })
          }
        />
      )}

      <SimpleSnackbar
        title={snack.text}
        open={snack.open}
        onClose={() => setSnack({ ...snack, open: false })}
      />
    </Container>
  );
}
