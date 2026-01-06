import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, grey, red, teal } from "@mui/material/colors";
import ToDoList from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import DoneTasks from "./components/DoneTasks";
import UnDoneTasks from "./components/UndoneTasks";
import AddNewTask from "./components/AddNewTask";
import { useEffect, useState } from "react";
import AllTasksContext from "./components/switches/allTasksContext";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal[200],
    },
    error: {
      main: red[500],
    },
    info: {
      main: grey[50],
    },
    success: {
      main: green[500],
    },
    // h1: {
    //   fontFamily: "customFont",
    // },
    // p: {
    //   fontFamily: "customFont",
    // },
    // h2: {
    //   fontFamily: "customFont",
    // },

    typography: {
      fontFamily: "Tagesschrift",
    },
  },
});

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (task, taskDesc = "") => {
    setTasks((prev) => {
      const newTasks = [...prev, { taskTitle: task, taskDesc, isDone: false }];

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };
  const toggleTask = (index) => {
    setTasks((prev) => {
      const newtasks = prev.map((t, i) =>
        i === index ? { ...t, isDone: !t.isDone } : t
      );
      localStorage.setItem("tasks", JSON.stringify(newtasks));
      return newtasks;
    });
  };
  const deleteTask = (index) => {
    setTasks((prev) => {
      const newtasks = prev.filter((t, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(newtasks));
      return newtasks;
    });
  };
  const editTask = (index, task) => {
    console.log(task);
    setTasks((prev) => {
      const newtasks = prev.map((t, i) =>
        i === index
          ? { ...t, taskTitle: task.taskTitle, taskDesc: task.taskDesc }
          : t
      );
      localStorage.setItem("tasks", JSON.stringify(newtasks));
      return newtasks;
    });
  };
  console.log(tasks);
  return (
    <AllTasksContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, editTask }}
    >
      <ThemeProvider theme={theme}>
        <div
          style={{
            // maxHeight: "90vh",
            // overflow: "scroll",
            // backgroundColor: "white",
            // padding: "20px",
            // borderRadius: "10px",
            // width: "100%",
            // margin: "30px auto",
          }}
        >
          <ToDoList></ToDoList>
          <Routes>
            <Route path="/" element={<AllTasks></AllTasks>}></Route>
            <Route path="/done" element={<DoneTasks></DoneTasks>}></Route>
            <Route path="/undone" element={<UnDoneTasks></UnDoneTasks>}></Route>
          </Routes>
          <AddNewTask></AddNewTask>
        </div>
      </ThemeProvider>
    </AllTasksContext.Provider>
  );
}

export default App;
