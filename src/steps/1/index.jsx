import { Typography } from "@mui/material";
import Instructions from "../../instructions";
import App from "./app";

export default function Step1() {
  return (
    <div>
      <App />
      <Instructions>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Step 1: Test Drive
        </Typography>
        <Typography variant="body1">Example instruction text</Typography>
      </Instructions>
    </div>
  );
}
