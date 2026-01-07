import { Container, Stack } from "@mui/material";

import Task from "./task/Task";
import AllTasksContext from "./switches/allTasksContext";
import { useContext } from "react";

export default function DoneTasks() {
  const { tasks } = useContext(AllTasksContext);
  console.log("done tasks", tasks);
  const mappedTasks = tasks
    .filter((t) => t.isDone === true)
    .map((t, index) => (
      <Task
        key={index}
        taskTitle={t.taskTitle}
        taskDesc={t.taskDesc}
        isDone={t.isDone}
        index={index}
        
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
    </Container>
  );
}
