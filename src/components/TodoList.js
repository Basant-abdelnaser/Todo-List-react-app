import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export let AllTasksArr = [];
export let DoneTasksArr = [];
export let UnDoneTasksArr = [];

function ToDoList(taskTitle) {
  const [value, setValue] = useState(0);
  const location = useLocation();

  const getValueFromPath = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/done":
        return 1;
      case "/undone":
        return 2;
      default:
        return 0;
    }
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: 500, marginBottom: "30px" }}>
        <h1 style={{ textAlign: "center", fontFamily: "Tagesschrift" }}>
          Todo list
        </h1>
        <BottomNavigation
          showLabels
          value={getValueFromPath()}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="All"
            icon={<RestoreIcon />}
            component={Link}
            to="/"
          />

          <BottomNavigationAction
            label="Done"
            icon={<DoneOutlineIcon />}
            component={Link}
            to="/done"
          />

          <BottomNavigationAction
            label="UnDone"
            icon={<EditNoteIcon />}
            component={Link}
            to="/undone"
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
export default ToDoList;
