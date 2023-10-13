import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
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
import { appTheme } from "./theme";
import TASKS from "./tasks.json";

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
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100vh",
          boxSizing: "border-box",
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
        <Box pt={10} pb={1}>
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={filter}
            exclusive
            onChange={(e, f) => setFilter(f)}
            aria-label="Filter"
            sx={{
              backgroundColor: "background.paper",
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
        </Box>

        <List>
          {tasks.map((task) => {
            const labelId = `checkbox-list-label-${task.id}`;
            return (
              <Paper
                elevation={0}
                sx={{
                  marginBottom: 1,
                }}
              >
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
