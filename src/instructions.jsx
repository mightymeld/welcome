import { useEffect, useState } from "react";
import { Link, useMatches } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import confetti from "canvas-confetti";

const WIDTH = 300;

export const steps = [Step0, Step1, Step2, Step3];

function Instructions({ fullPage, children }) {
  useEffect(() => {
    document.body.style.marginLeft = `${WIDTH}px`;

    return () => {
      document.body.style.marginLeft = "0";
    };
  }, []);

  const [match] = useMatches();
  const step = match.params?.step ? parseInt(match.params.step, 10) : 0;

  let prevLink = null;
  let nextLink = null;

  if (step === 1) {
    prevLink = (
      <Link style={{ position: "absolute", bottom: 20, left: 20 }} to="/">
        ← Previous
      </Link>
    );
  } else if (step > 1) {
    prevLink = (
      <Link
        style={{ position: "absolute", bottom: 20, left: 20 }}
        to={`/step/${step - 1}`}
      >
        ← Previous
      </Link>
    );
  }

  if (step > 0 && step < steps.length - 1) {
    nextLink = (
      <Link
        style={{ position: "absolute", bottom: 20, right: 20 }}
        to={`/step/${step + 1}`}
      >
        Next →
      </Link>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: fullPage ? "100%" : WIDTH,
        height: "100vh",
        background: "#ffffe0",
        borderColor: "#dc0",
        borderStyle: "solid",
        borderWidth: "0",
        borderRightWidth: fullPage ? "0" : "1px",
        boxSizing: "border-box",
        padding: 2,
      }}
    >
      {children}
      {prevLink}
      {nextLink}
    </Box>
  );
}

Instructions.defaultProps = {
  fullPage: false,
};

function Step0() {
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
              <Button component={Link} to="/step/1" variant="outlined">
                Continue Tutorial →
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Instructions>
  );
}

function Step1() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 1: Play with the app
      </Typography>
      <Typography variant="body1" my={3}>
        On the right you’ll see a to-do app. Let’s play with it a bit.
      </Typography>
      <Typography variant="body1" my={3}>
        <strong>Your task:</strong> Add a new to-do called “Buy groceries”
      </Typography>
    </Instructions>
  );
}

function Step2() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 2: Style Changes
      </Typography>
      <Typography variant="body1" mt={3}>
        The spacing above the filter buttons is a little too large. Let’s make
        that smaller.
      </Typography>
      <Typography variant="body1" mt={3}>
        <strong>Your task:</strong> Switch to edit mode and select the
        &lt;ToggleButtonGroup&gt;. Change <code>padding-top</code> from 10 to 4.
      </Typography>
      <Box
        component="img"
        src="/selected-filter.png"
        sx={{
          maxWidth: "100%",
          height: "auto",
          marginTop: 4,
          border: 1,
        }}
      />
    </Instructions>
  );
}

function Step3() {
  const code = `if ((filter === "active" && task.done) || (filter === "done" && !task.done)) {\n  return null;\n}`;

  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 3: Code
      </Typography>
      <Typography variant="body1" my={3}>
        You may have noticed that the filter buttons don’t do anything. Let’s
        fix that!
      </Typography>
      <Typography variant="body1" my={3}>
        <strong>Your task:</strong> Right-click on the &lt;List&gt; containing
        the tasks and choose “Open in Editor”.{" "}
      </Typography>
      <Box
        component="img"
        src="/open-in-vscode.png"
        sx={{
          maxWidth: "100%",
          height: "auto",
          border: 1,
        }}
      />
      <Typography variant="body1" my={3}>
        Then add the following code at the very start of the map function
        (before <code>const labelId</code>)
      </Typography>
      <TextField
        label="Code"
        fullWidth
        multiline
        rows={5}
        defaultValue={code}
        inputProps={{
          readOnly: true,
          sx: { fontFamily: "monospace", fontSize: 12 },
        }}
      />
      <Typography variant="body1" my={3}>
        Save the file and when you come back here, the filter buttons should be
        working!
      </Typography>
    </Instructions>
  );
}
