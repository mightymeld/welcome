import { Alert, Button, Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import confetti from "canvas-confetti";
import Instructions from "./instructions";

export default function Home() {
  const feedback = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      angle: -90,
      origin: { x: 0.5, y: -0.5 },
      ticks: 100,
    });
  };
  return (
    <Instructions fullPage>
      <Container maxWidth="sm">
        <Typography variant="h1">Welcome to MightyMeld</Typography>
        <Typography variant="body1" my={3}>
          Before we start editing an app, you’ll need to learn how to navigate
          this tutorial. Clicking items on this page will select them, but if
          you want to click them you’ll need to enter Test Drive.
        </Typography>
        <Box>[Image of Test Drive toggle]</Box>
        <Typography variant="body1" my={3}>
          <strong>Your task:</strong> Enter test drive in order to click the
          button below.
        </Typography>
        <Box my={4} align="center">
          <Button onClick={feedback} variant="outlined" color="success">
            {" "}
            Click me
          </Button>
        </Box>
        <Alert severity="info">
          Tip: Hold down Command/Meta while you click to activate the button
          without leaving edit mode
        </Alert>
        <Typography variant="body1" mt={3}>
          When you’re comfortable with navigating around, click{" "}
          <strong>Start Tutorial</strong> to begin the tutorial!
        </Typography>
        <Box mt={4} align="center">
          <Link variant="h4" component={RouterLink} to="/steps/1">
            Start Tutorial
          </Link>
        </Box>
      </Container>
    </Instructions>
  );
}
