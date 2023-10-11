import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import TASKS from "./tasks.json";

const theme = createTheme({
  typography: {
    // fontSize: 10,
    h1: {
      fontSize: 40,
      fontWeight: 500,
    },
    h2: {
      fontSize: 30,
      fontWeight: 500,
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#17a5ea",
    },
    secondary: {
      main: "#2dd4bf",
    },
    background: {
      default: "#0f172a",
      paper: "#0f172a",
    },
    text: {
      primary: "#94a3b8",
    },
  },
});

export default function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [newTaskName, setNewTaskName] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleDone = (id) => {
    console.log(id);
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const addTask = () => {
    if (newTaskName === "") return;
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length + 1, name: newTaskName, done: false },
    ]);
    setNewTaskName("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          height: "100vh",
          padding: 5,
        }}
      >
        <Typography
          variant="h1"
          mb={3}
          color="text.primary"
          align="center"
          sx={{
            fontFamily:
              "Rockwell, 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif",
          }}
        >
          My Tasks
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            variant="outlined"
            size="small"
            label="What needs to be done?"
            value={newTaskName}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            onChange={(e) => setNewTaskName(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={() => addTask()}>
            Add
          </Button>
        </Stack>
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={filter}
          exclusive
          onChange={(e, f) => setFilter(f)}
          aria-label="Filter"
          sx={{
            paddingTop: 4,
            paddingBottom: 1,
          }}
        >
          <ToggleButton disableRipple value="all">
            All
          </ToggleButton>
          <ToggleButton disableRipple value="active">
            Active
          </ToggleButton>
          <ToggleButton disableRipple value="done">
            Done
          </ToggleButton>
        </ToggleButtonGroup>
        <Paper>
          <List>
            {tasks.map((task) => {
              const labelId = `checkbox-list-label-${task.id}`;

              return (
                <ListItem key={task.id} disablePadding>
                  <ListItemButton
                    onClick={() => toggleDone(task.id)}
                    disableRipple
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={task.done}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={task.name}
                      sx={{
                        color: "text.primary",
                        textDecoration: task.done ? "line-through" : "none",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
