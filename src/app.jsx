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
    mode: "light",
    primary: {
      main: "#17a5ea",
    },
    secondary: {
      main: "#2dd4bf",
    },
    background: {
      default: "#EEE",
      paper: "#FFF",
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
        task.id === id ? { ...task, done: !task.done } : task
      )
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
          color="text.secondary"
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
            variant="filled"
            size="small"
            label="What needs to be done?"
            value={newTaskName}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            onChange={(e) => setNewTaskName(e.target.value)}
            fullWidth
            inputProps={{
              sx: {
                backgroundColor: "background.paper",
              },
            }}
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
            backgroundColor: "background.paper",
            marginTop: 10,
            marginBottom: 2,
          }}
        >
          <ToggleButton
            disableRipple
            value="all"
            sx={{
              px: 2,
            }}
          >
            All
          </ToggleButton>
          <ToggleButton
            disableRipple
            value="active"
            sx={{
              px: 2,
            }}
          >
            Active
          </ToggleButton>
          <ToggleButton
            disableRipple
            value="done"
            sx={{
              px: 2,
            }}
          >
            Done
          </ToggleButton>
        </ToggleButtonGroup>
        <List>
          {tasks.map((task) => {
            const labelId = `checkbox-list-label-${task.id}`;
            return (
              <Paper elevation={0} sx={{ marginBottom: 1 }}>
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
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
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
              </Paper>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
}
