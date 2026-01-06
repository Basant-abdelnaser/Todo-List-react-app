import { useContext } from "react";

import AllTasksContext from "./switches/allTasksContext";
import Task from "./task/Task";
import { Container, Stack } from "@mui/material";

export default function UnDoneTasks() {
  const { tasks } = useContext(AllTasksContext);
  console.log("undone tasks", tasks);
  const mappedTasks = tasks
    .filter((t) => t.isDone === false)
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
