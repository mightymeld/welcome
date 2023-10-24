import { useEffect, useState } from "react";
import { Link as RouterLink, useMatches } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import confetti from "canvas-confetti";
import copy from "copy-to-clipboard";
import { instructionsTheme } from "./theme";

const WIDTH = 300;

export const steps = [
  Step0,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
];

function Instructions({ fullPage, children }) {
  useEffect(() => {
    document.body.style.marginLeft = `${WIDTH}px`;

    return () => {
      document.body.style.marginLeft = "0";
    };
  }, []);

  const [match] = useMatches();
  const step = match.params?.step ? parseInt(match.params.step, 10) : 0;

  let prevPath = null;
  let nextPath = null;

  if (step > 0) {
    prevPath = `/step/${step - 1}`;
  }

  if (step < steps.length - 1) {
    nextPath = `/step/${step + 1}`;
  }

  return (
    <ThemeProvider theme={instructionsTheme}>
      <Box
        data-mm-ignore-tree
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: fullPage ? "100%" : WIDTH,
        }}
      >
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#19163E",
            color: "#D5D5E3",
            borderWidth: 0,
            borderRightWidth: fullPage ? "0" : "1px",
            boxSizing: "border-box",
            padding: 2,
            paddingBottom: 6,
            overflow: "auto",
          }}
        >
          {children}
        </Box>
        {prevPath && (
          <Button
            data-mm-tutorial-click
            component={RouterLink}
            size="small"
            sx={{
              position: "absolute",
              bottom: 20,
              left: 15,
            }}
            to={prevPath}
          >
            ← Previous
          </Button>
        )}
        {nextPath && (
          <Button
            data-mm-tutorial-click
            component={RouterLink}
            size="small"
            sx={{
              position: "absolute",
              bottom: 20,
              right: 15,
            }}
            to={nextPath}
          >
            Next →
          </Button>
        )}
      </Box>
    </ThemeProvider>
  );
}

Instructions.defaultProps = {
  fullPage: false,
};

function Step0() {
  return (
    <Instructions>
      <Typography variant="h4" mb={3}>
        Welcome!
      </Typography>
      <Typography variant="body2" my={3}>
        This app teaches you how to use MightyMeld.
      </Typography>
      <Typography variant="body2" my={3}>
        On the right you’ll see a partially build to-do app. Let’s start by{" "}
        <strong>clicking</strong> on various parts of it.
      </Typography>
      <Box
        component="img"
        src="/selecting-things.gif"
        sx={{ border: 1 }}
        width="100%"
      />
      <Typography variant="body2" my={3}>
        Notice how the left and right panels change in response to what you
        select.
      </Typography>
      <Typography variant="body2" mt={6}>
        Click <strong>Next →</strong> to go to the next step.
      </Typography>
    </Instructions>
  );
}

function Step1() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 1: Drive mode
      </Typography>
      <Typography variant="body2" my={3}>
        1. Switch to <strong>Drive</strong> mode in order to interact with the
        to-do app.
      </Typography>
      <Box
        component="img"
        src="/drive-mode.gif"
        sx={{ border: 1 }}
        width="100%"
      />
      <Typography variant="body2" my={3}>
        2. <strong>Add</strong> a new to-do called “Buy groceries.”
      </Typography>
      <Box
        component="img"
        src="/add-task.gif"
        sx={{ border: 1 }}
        width="100%"
      />
    </Instructions>
  );
}

function Step2() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 2: Style Changes
      </Typography>
      <Typography variant="body2" mt={3}>
        The spacing above the filter buttons is a little too large. Let’s make
        that smaller.
      </Typography>
      <Typography variant="body2" my={3}>
        1. <strong>Switch to edit mode</strong> and <strong>select</strong> the{" "}
        <code>&lt;Stack&gt;</code> surrounding the filter.
      </Typography>
      <Box
        component="img"
        src="/select-filter-stack.gif"
        sx={{
          maxWidth: "100%",
          height: "auto",
          border: 1,
          marginBottom: 1,
        }}
      />
      <Alert severity="info">
        If you select <code>&lt;App&gt;</code> instead of{" "}
        <code>&lt;Stack&gt;</code>, double-click.
      </Alert>
      <Typography variant="body2" my={3}>
        2. <strong>Change the prop</strong> <code>pt</code> (padding top) from{" "}
        <code>10</code> to <code>4</code>.
      </Typography>
      <Box
        component="img"
        src="/change-pt.gif"
        sx={{
          maxWidth: "100%",
          height: "auto",
          border: 1,
        }}
      />
    </Instructions>
  );
}

function Step3() {
  const exampleCode = `if ((filter === "active" && task.done) || (filter === "done" && !task.done)) {\n  return null;\n}`;

  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 3: Editing Code
      </Typography>
      <Typography variant="body2" my={3}>
        You may have noticed the filter doesn’t do anything. Let’s fix that!
      </Typography>
      <Typography variant="body2" my={3}>
        1. In drive mode, <strong>copy</strong> this code.
      </Typography>
      <Box sx={{ position: "relative" }}>
        <TextField
          variant="standard"
          fullWidth
          multiline
          rows={5}
          defaultValue={exampleCode}
          sx={{
            backgroundColor: "background.paper",
          }}
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            sx: {
              padding: 1,
              fontFamily: "monospace",
              color: "#000",
              fontSize: 12,
            },
          }}
        />
        <Button
          data-mm-tutorial-click
          size="small"
          onClick={() => copy(exampleCode)}
          sx={{
            padding: "2px",
            position: "absolute",
            bottom: "5px",
            right: "5px",
          }}
        >
          Copy
        </Button>
      </Box>
      <Typography variant="body2" my={3}>
        2. In edit mode, <strong>right-click</strong> one of the list items and
        choose <strong>Open in Editor</strong>.
      </Typography>
      <Box
        component="img"
        src="/editor-paste.gif"
        border={1}
        sx={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Typography variant="body2" my={3}>
        3. <strong>Paste</strong> the code before the line with{" "}
        <code>const labelId</code>, and <strong>save the file</strong>.
      </Typography>
      <Typography variant="body2" my={3}>
        The filters should now work!
      </Typography>
    </Instructions>
  );
}

function Step4() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 4: Git Diff
      </Typography>
      <Typography variant="body2" my={3}>
        Let’s see what changes we’ve made so far.
      </Typography>
      <Typography variant="body2" my={3}>
        <strong>Your task:</strong> Click on the diff icon in the toolbar.
      </Typography>
      <Box
        component="img"
        src="/diff.png"
        sx={{ border: 1 }}
        width="212px"
        height="48px"
      />
    </Instructions>
  );
}

function Step5() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 5: Active Component
      </Typography>
      <Typography variant="body2" my={3}>
        MightyMeld shows one active component at a time. Right now that should
        be <code>&lt;App&gt;</code>.
      </Typography>
      <Typography variant="body2" my={3}>
        1. <strong>Double-click</strong> <code>&lt;Header&gt;</code> to make it
        active.
      </Typography>
      <Box
        component="img"
        src="/component-down.gif"
        sx={{
          border: 1,
        }}
        width="100%"
      />
      <Typography variant="body2" my={3}>
        2. <strong>Click the arrow</strong> to back up to{" "}
        <code>&lt;App&gt;</code>.
      </Typography>
      <Box
        component="img"
        src="/component-up.gif"
        sx={{
          border: 1,
        }}
        width="100%"
      />
    </Instructions>
  );
}

function Step6() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 6: Prefabs
      </Typography>
      <Typography variant="body2" my={3}>
        1. <strong>Open the MUI prefabs </strong> from the library panel.
      </Typography>
      <Box
        component="img"
        src="/show-prefabs.gif"
        sx={{
          border: 1,
        }}
        width="100%"
      />
      <Typography variant="body2" my={3}>
        2. <strong>Drag</strong> a <code>&lt;Button&gt;</code> into the{" "}
        <code>&lt;Stack&gt;</code>.
      </Typography>
      <Box
        component="img"
        src="/drag-button.gif"
        sx={{ border: 1 }}
        width="100%"
      />
    </Instructions>
  );
}

function Step7() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 7: Text
      </Typography>
      <Typography variant="body2" my={3}>
        1. <strong>Select</strong> the button’s text node.
      </Typography>
      <Box
        component="img"
        src="/select-text-node.gif"
        sx={{
          border: 1,
        }}
        width="100%"
      />
      <Typography variant="body2" my={3}>
        2. <strong>Rename</strong> the label to “Clear”.
      </Typography>
      <Box
        component="img"
        src="/edit-text-node.gif"
        sx={{
          border: 1,
        }}
        width="100%"
      />
    </Instructions>
  );
}

function Step8() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 8: Adding props
      </Typography>
      <Typography variant="body2" my={3}>
        Let’s give some functionality to the “Clear” button.
      </Typography>
      <Typography variant="body2" my={3}>
        1. <strong>Select</strong> the button.
      </Typography>
      <Typography variant="body2" my={3}>
        2. <strong>Add a new prop</strong> named <code>onClick</code> with the
        value <code>clearCompleted</code>.
      </Typography>
      <Box
        component="img"
        src="/onclick-handler.gif"
        sx={{
          border: 1,
        }}
        width="100%"
      />
    </Instructions>
  );
}

function Step9() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        You did it!
      </Typography>
      <Typography variant="body2" my={3}>
        Congrats on completing this fully functional to-do app! Here’s some
        ideas on what to try next:
      </Typography>
      <Typography variant="body2" my={3}>
        <Link
          data-mm-tutorial-click
          href="https://docs.mightymeld.com/docs/setup/getting-started/quick-start"
          target="_blank"
        >
          Set up your own project →
        </Link>
      </Typography>
      <Typography variant="body2" my={3}>
        <Link
          data-mm-tutorial-click
          href="https://github.com/mightymeld/awesome-mightymeld#-sample-projects"
          target="_blank"
        >
          Try a sample project →
        </Link>
      </Typography>
    </Instructions>
  );
}
