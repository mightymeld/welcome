import { Typography } from "@mui/material";
import Instructions from "../../instructions";
import App from "./app";

export default function Step1() {
  return (
    <div>
      <App />
      <Instructions>
        <Typography
          variant="h5"
          sx={{
            marginBottom: 2,
          }}
        >
          Step 1: Play with the app
        </Typography>
        <Typography variant="body1" my={3}>
          Let’s start by playing with our to-do app a bit.
        </Typography>
        <Typography variant="body1" my={3}>
          <strong>Your task:</strong> Add a new to-do called “Buy groceries”
        </Typography>
      </Instructions>
    </div>
  );
}
