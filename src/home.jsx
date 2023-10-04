import { useState } from "react";
import { Button, Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import confetti from "canvas-confetti";
import Instructions from "./instructions";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const click = () => {
    setClicked(true);
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
        <Typography variant="h1">Welcome</Typography>
        <Typography variant="body1" my={3}>
          Before we start editing an app, you’ll need to learn how to navigate
          this tutorial. Clicking items on this page will select them, but if
          you want to click them you’ll need to enter Test Drive.
        </Typography>
        <Box
          sx={{
            border: 1,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          component="img"
          src="/test-drive.gif"
          width="110px"
          height="38px"
          alt="Test drive toggle button"
        />
        <Typography variant="body1" my={3}>
          <strong>Your task:</strong> Enter test drive and click the button
          below.
        </Typography>
        <Box my={4}>
          <Button onClick={click} variant="outlined">
            Click me
          </Button>
        </Box>
        {clicked && (
          <>
            <Typography variant="body1" mt={3}>
              You clicked the button! Feel free to play with test drive, and
              continue when you’re ready.
            </Typography>
            <Box mt={4}>
              <Button component={RouterLink} to="/steps/1" variant="outlined">
                Continue Tutorial →
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Instructions>
  );
}
