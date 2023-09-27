import { Box, Typography, TextField } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        padding: 5,
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: 3 }}>
        To-do App
      </Typography>
      <TextField variant="outlined" label="What needs to be done?" fullWidth />
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </Box>
  );
}
