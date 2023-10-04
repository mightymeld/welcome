import { Box, Typography } from "@mui/material";
import Instructions from "../../instructions";
import App from "./app";

export default function Step2() {
  return (
    <div>
      <App />
      <Instructions>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Step 2: Style Changes
        </Typography>
        <Typography variant="body1" mt={3}>
          The spacing above the filter buttons is a little too large. Let’s make
          that smaller.
        </Typography>
        <Typography variant="body1" mt={3}>
          <strong>Your task:</strong> Switch to edit mode and select the
          &lt;ToggleButtonGroup&gt;. Change <code>padding-top</code> from 10 to
          4.
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
    </div>
  );
}
