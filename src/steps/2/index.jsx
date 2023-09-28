import { Typography } from "@mui/material";
import Instructions from "../../instructions";
import App from "./app";

export default function Step1() {
  return (
    <div>
      <App />
      <Instructions>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Step 2: Style Changes
        </Typography>
        <Typography variant="body1" mt={3}>
          The spacing between the to-do items looks a little too large. Let’s
          make that smaller.
        </Typography>
        <Typography variant="body1" mt={3}>
          <strong>Your task:</strong> Select the &lt;ToggleButtonGroup&gt; and
          change the top padding from 10 to 4.
        </Typography>
      </Instructions>
    </div>
  );
}
