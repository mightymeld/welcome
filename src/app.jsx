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
} from "@mui/material";
import { appTheme } from "./theme";
import TASKS from "./tasks.json";
import { Footer } from "./footer";
import { Header } from "./header";

export default function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [newTaskName, setNewTaskName] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleDone = (id) => {
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

  // Don’t remove this. A reference to it will be added by the user during the tutorial.
  const clearCompleted = () => {
    setTasks((tasks) => tasks.filter((task) => !task.done));
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
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
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
        </Box>
        <Stack pt={10} pb={1} direction="row" justifyContent="space-between">
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
        </Stack>
        <List>
          {tasks.map((task) => {
            const labelId = `checkbox-list-label-${task.id}`;
            return (
              <Paper
                key={task.id}
                elevation={0}
                sx={{
                  marginBottom: 1,
                }}
              >
                <ListItem disablePadding>
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
