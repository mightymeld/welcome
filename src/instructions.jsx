import { useEffect } from "react";
import { Link as RouterLink, useMatches } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
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
  Step10,
];

function Instructions({ children, showNav }) {
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

  if (showNav) {
    if (step > 0) {
      prevPath = `/step/${step - 1}`;
    }

    if (step < steps.length - 1) {
      nextPath = `/step/${step + 1}`;
    }
  }

  return (
    <ThemeProvider theme={instructionsTheme}>
      <Box
        data-mm-ignore-tree
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: '300px'
        }}
      >
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#19163E",
            color: "#D5D5E3",
            borderWidth: 0,
            borderRightWidth: "1px",
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
  showNav: true,
};

function Step0() {
  return (
    <Instructions showNav={false}>
      <Container maxWidth="sm">
        <Typography variant="h1" mt={8}>
          Welcome
        </Typography>
        <Typography variant="body1" my={3}>
          This app teaches you how to use MightyMeld.
        </Typography>
        <Button data-mm-tutorial-click component={RouterLink} to="/step/1">
          Begin Tutorial
        </Button>
      </Container>
    </Instructions>
  );
}

function Step1() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 1: Selection
      </Typography>
      <Typography variant="body2" my={3}>
        On the right you’ll see a partially built to-do app. Let’s start by{" "}
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
    </Instructions>
  );
}

function Step2() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 2: Drive mode
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

function Step3() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 3: Style Changes
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
        src="/edit-mode-select-filter-stack.gif"
        sx={{
          maxWidth: "100%",
          height: "auto",
          border: 1,
          marginBottom: 1,
        }}
      />
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

function Step4() {
  const exampleCode = `if ((filter === "active" && task.done) || (filter === "done" && !task.done)) {\n  return null;\n}`;

  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 4: Editing Code
      </Typography>
      <Typography variant="body2" my={3}>
        You may have noticed the filter doesn’t do anything. Let’s fix that!
      </Typography>
      <Typography variant="body2" my={3}>
        1. <strong>Copy</strong> this code.
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
        2. <strong>Right-click</strong> one of the list items and choose{" "}
        <strong>Open in Editor</strong>.
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
        4. <strong>Switch to Drive mode</strong> and test the filters. They
        should now work!
      </Typography>
    </Instructions>
  );
}

function Step5() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 5: Git Diff
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

function Step6() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 6: Active Component
      </Typography>
      <Typography variant="body2" my={3}>
        MightyMeld shows one active component at a time. Right now that should
        be <code>&lt;App&gt;</code>.
      </Typography>
      <Typography variant="body2" my={3}>
        1. In edit mode, <strong>double-click</strong>{" "}
        <code>&lt;Header&gt;</code> to make it active.
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
        2. <strong>Click the arrow</strong> to go back up to{" "}
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

function Step7() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 7: Prefabs
      </Typography>
      <Typography variant="body2" my={3}>
        1. In edit mode, <strong>open the MUI prefabs </strong> from the library
        panel.
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

function Step8() {
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

function Step9() {
  return (
    <Instructions>
      <Typography variant="h5" mb={3}>
        Step 9: Adding props
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
      <Typography variant="body2" my={3}>
        3. In Drive mode, <strong>click the Clear button</strong>.
      </Typography>
    </Instructions>
  );
}

function Step10() {
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
