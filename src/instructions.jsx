import { useEffect } from "react";
import { Link, useMatches } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import copy from "copy-to-clipboard";
import { instructionsTheme } from "./theme";
import "./style.css"

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
      <div data-mm-ignore-tree className="fixed top-0 left-0 w-[300px] ">
        <div className="bg-[#19163E] text-[#D5D5E3] p-1 pb-0 h-screen border-0 border-r box-border overflow-auto " >
          {children}
        </div>
        {prevPath && (
          <Link to={prevPath}>
            <button data-mm-tutorial-click className="absolute bottom-5 left-4 text-xs text-white bg-[#582AB9] py-2.5 px-5 font-medium" >
              ← Previous
            </button>
          </Link>

        )}
        {nextPath && (
          <Link to={nextPath}>
            <button data-mm-tutorial-click className="absolute bottom-5 right-4 text-xs text-white bg-[#582AB9] py-2.5 px-5 font-medium" >
              Next →
            </button>
          </Link>
        )}
      </div>
    </ThemeProvider>
  );
}

Instructions.defaultProps = {
  showNav: true,
};

function Step0() {
  return (
    <Instructions showNav={false}>
      <div className="max-w-[600px] ">
        <h1 className="mt-5 font-medium text-[58px] ">
          Welcome
        </h1>
        <p className="my-5 text-base font-medium ">
          This app teaches you how to use MightyMeld.
        </p>
        <Link to="/step/1">
          <button data-mm-tutorial-click className=" text-xs text-white bg-[#582AB9] py-2.5 px-5 font-medium" >
            Begin Tutorial
          </button>
        </Link>
      </div>
    </Instructions>
  );
}

function Step1() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 1: Selection
      </h5>
      <p className="my-5 text-sm">
        On the right you’ll see a partially built to-do app. Let’s start by{" "}
        <strong>clicking</strong> on various parts of it.
      </p>
      <img className="border"
        src="/selecting-things.gif"
        width="100%"
      />
      <p className="my-5 text-sm">
        Notice how the left and right panels change in response to what you
        select.
      </p>
    </Instructions>
  );
}

function Step2() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 2: Drive mode
      </h5>
      <p className="my-5 text-sm">
        1. Switch to <strong>Drive</strong> mode in order to interact with the
        to-do app.
      </p>
      <img className="border"
        src="/drive-mode.gif"
        width="100%"
      />
      <p className="my-5 text-sm">
        2. <strong>Add</strong> a new to-do called “Buy groceries.”
      </p>
      <img className="border"
        src="/add-task.gif"
        width="100%"
      />
    </Instructions>
  );
}

function Step3() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 3: Style Changes
      </h5>
      <p className="mt-5 text-sm">
        The spacing above the filter buttons is a little too large. Let’s make
        that smaller.
      </p>
      <p className="my-5 text-sm">
        1. <strong>Switch to edit mode</strong> and <strong>select</strong> the{" "}
        <code>&lt;Stack&gt;</code> surrounding the filter.
      </p>
      <img className="border max-w-full h-auto mb-2"
        src="/edit-mode-select-filter-stack.gif"
      />
      <p className="my-5 text-sm">
        2. <strong>Change the prop</strong> <code>pt</code> (padding top) from{" "}
        <code>10</code> to <code>4</code>.
      </p>
      <img className="border max-w-full h-auto"
        src="/change-pt.gif"
      />
    </Instructions>
  );
}

function Step4() {
  const exampleCode = `if ((filter === "active" && task.done) || (filter === "done" && !task.done)) {\n  return null;\n}`;

  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 4: Editing Code
      </h5>
      <p className="my-5 text-sm">
        You may have noticed the filter doesn’t do anything. Let’s fix that!
      </p>
      <p className="my-5 text-sm">
        1. <strong>Copy</strong> this code.
      </p>
      <div className="relative">
        <textarea className="p-2 py-4 w-full text-xs font-mono rounded-none outline-none text-[#000] " defaultValue={exampleCode} rows={5} readOnly></textarea>
        <button data-mm-tutorial-click onClick={() => copy(exampleCode)} className="absolute bottom-2.5 right-1.5 text-xs text-white bg-[#582AB9] py-1.5 px-4 font-medium" >
          Copy
        </button>
      </div>
      <p className="my-5 text-sm">
        2. <strong>Right-click</strong> one of the list items and choose{" "}
        <strong>Open in Editor</strong>.
      </p>
      <img className="border h-auto max-w-full"
        src="/editor-paste.gif"
      />
      <p className="my-5 text-sm">
        3. <strong>Paste</strong> the code before the line with{" "}
        <code>const labelId</code>, and <strong>save the file</strong>.
      </p>
      <p className="my-5 text-sm">
        4. <strong>Switch to Drive mode</strong> and test the filters. They
        should now work!
      </p>
    </Instructions>
  );
}

function Step5() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 5: Git Diff
      </h5>
      <p className="my-5 text-sm">
        Let’s see what changes we’ve made so far.
      </p>
      <p className="my-5 text-sm">
        <strong>Your task:</strong> Click on the diff icon in the toolbar.
      </p>
      <img className="border"
        src="/diff.png"
        width="212px"
        height="48px"
      />
    </Instructions>
  );
}

function Step6() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 6: Active Component
      </h5>
      <p className="my-5 text-sm">
        MightyMeld shows one active component at a time. Right now that should
        be <code>&lt;App&gt;</code>.
      </p>
      <p className="my-5 text-sm">
        1. In edit mode, <strong>double-click</strong>{" "}
        <code>&lt;Header&gt;</code> to make it active.
      </p>
      <img className="border" src="/component-down.gif"
        width="100%"
      />
      <p className="my-5 text-sm">
        2. <strong>Click the arrow</strong> to go back up to{" "}
        <code>&lt;App&gt;</code>.
      </p>
      <img className="border"
        src="/component-up.gif"
        width="100%"
      />
    </Instructions>
  );
}

function Step7() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 7: Prefabs
      </h5>
      <p className="my-5 text-sm">
        1. In edit mode, <strong>open the MUI prefabs </strong> from the library
        panel.
      </p>
      <img className="border"
        src="/show-prefabs.gif"
        width="100%"
      />
      <p className="my-5 text-sm">
        2. <strong>Drag</strong> a <code>&lt;Button&gt;</code> into the{" "}
        <code>&lt;Stack&gt;</code>.
      </p>
      <img className="border"
        src="/drag-button.gif"
        width="100%"
      />
    </Instructions>
  );
}

function Step8() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 8: Text
      </h5>
      <p className="mb-5 text-sm">
        1. <strong>Select</strong> the button’s text node.
      </p>
      <img className="border"
        src="/select-text-node.gif"
        width="100%"
      />
      <p className="my-5 text-sm">
        2. <strong>Rename</strong> the label to “Clear”.
      </p>
      <img className="border"
        src="/edit-text-node.gif"
        width="100%"
      />
    </Instructions>
  );
}

function Step9() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        Step 9: Adding props
      </h5>
      <p className="mb-5 text-sm">
        Let’s give some functionality to the “Clear” button.
      </p>
      <p className="mb-5 text-sm">
        1. <strong>Select</strong> the button.
      </p>
      <p className="mb-5 text-sm">
        2. <strong>Add a new prop</strong> named <code>onClick</code> with the
        value <code>clearCompleted</code>.
      </p>
      <img className="border"
        src="/onclick-handler.gif"
        width="100%"
      />
      <p className="mb-5 text-sm">
        3. In Drive mode, <strong>click the Clear button</strong>.
      </p>
    </Instructions>
  );
}

function Step10() {
  return (
    <Instructions>
      <h5 className="mb-5 font-medium text-xl ">
        You did it!
      </h5>
      <p className="mb-5 text-sm">
        Congrats on completing this fully functional to-do app! Here’s some
        ideas on what to try next:
      </p>
      <p className="my-5 text-sm">
        <a
          data-mm-tutorial-click
          href="https://docs.mightymeld.com/docs/setup/getting-started/quick-start"
          target="_blank" rel="noopener noreferrer"
        >
          Set up your own project →
        </a>
      </p>
      <p className="my-5 text-sm">
        <a
          data-mm-tutorial-click
          href="https://github.com/mightymeld/awesome-mightymeld#-sample-projects"
          target="_blank" rel="noopener noreferrer"
        >
          Try a sample project →
        </a>
      </p>
    </Instructions>
  );
}
