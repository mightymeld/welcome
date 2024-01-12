import { useMatches } from "react-router-dom";
import { steps } from "./instructions";

export const Tutorial = () => {
    const [match] = useMatches();
    const step = match.params?.step ? parseInt(match.params.step, 10) : 0;
    const InstructionsForStep = steps[step];
  
    return (
      <InstructionsForStep />
    )
  };