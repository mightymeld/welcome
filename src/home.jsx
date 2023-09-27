import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/steps/1">Start</Link>
    </div>
  );
}
