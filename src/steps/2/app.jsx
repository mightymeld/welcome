import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import TASKS from "./tasks";

export default function App() {
  const [tasks, setTasks] = useState(TASKS);
  return (
    <Box
      sx={{
        padding: 5,
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: 3 }}>
        To-do App
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          label="What needs to be done?"
          fullWidth
        />
        <Button variant="contained">Add</Button>
      </Stack>
      <List sx={{ marginTop: 10 }}>
        {tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.id}`;

          return (
            <ListItem key={task} disablePadding>
              <ListItemButton
                role={undefined}
                // onClick={handleToggle(value)}
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
