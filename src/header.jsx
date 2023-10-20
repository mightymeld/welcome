import { Typography } from "@mui/material";
export const Header = () => {
  return (
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
  );
};
