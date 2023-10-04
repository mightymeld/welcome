import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import TASKS from "./tasks";

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
    <Box p={5}>
      <Typography variant="h2" sx={{ marginBottom: 3 }}>
        To-do App
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
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
      <List>
        {tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.id}`;

          return (
            <ListItem key={task.id} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={() => toggleDone(task.id)}
                disableRipple
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={task.name}
                  sx={{ textDecoration: task.done ? "line-through" : "none" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
