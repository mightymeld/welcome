import { useMatches } from "react-router-dom";
import App from "./app";
import { steps } from "./instructions";

export default function Step() {
  const [match] = useMatches();
  const step = match.params?.step ? parseInt(match.params.step, 10) : 0;

  const Step = steps[step];

  return (
    <>
      {step ? <App /> : null}
      <Step />
    </>
  );
}
