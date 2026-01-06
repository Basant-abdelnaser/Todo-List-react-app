import { Container, Stack } from "@mui/material";
import Task from "./task/Task";
import AllTasksContext from "./switches/allTasksContext";
import { useContext, useEffect } from "react";

export default function AllTasks() {
  const { tasks } = useContext(AllTasksContext);
  //   const storedTasks = localStorage.getItem("tasks");
  //   console.log(storedTasks);
  //   console.log("storedd", ...JSON.parse(storedTasks));
  //   console.log("ajaj");

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
