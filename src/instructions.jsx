import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { steps } from "./main";

const WIDTH = 300;

export default function Instructions({ fullPage, children }) {
  useEffect(() => {
    document.body.style.marginLeft = `${WIDTH}px`;

    return () => {
      document.body.style.marginLeft = "0";
    };
  }, []);
  const { pathname } = useLocation();
  const stepMatch = pathname.match(/steps\/(\d+)$/);
  const currentStep = stepMatch ? parseInt(stepMatch[1], 10) : NaN;
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
      {currentStep === 1 && (
        <Link style={{ position: "absolute", bottom: 20, left: 20 }} to="/">
          ← Previous
        </Link>
      )}
      {currentStep > 1 && (
        <Link
          style={{ position: "absolute", bottom: 20, left: 20 }}
          to={`/steps/${currentStep - 1}`}
        >
          ← Previous
        </Link>
      )}
      {currentStep < steps.length && (
        <Link
          style={{ position: "absolute", bottom: 20, right: 20 }}
          to={`/steps/${currentStep + 1}`}
        >
          Next →
        </Link>
      )}
    </Box>
  );
}
