import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h1">Welcome</Typography>
      <Link variant="h3" component={RouterLink} to="/steps/1">
        Start
      </Link>
    </Box>
  );
}
