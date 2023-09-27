import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { steps } from "./main";

const WIDTH = 250;

export default function Home({ children }) {
  useEffect(() => {
    document.body.style.marginLeft = `${WIDTH}px`;

    return () => {
      document.body.style.marginLeft = "0";
    };
  }, []);
  const { pathname } = useLocation();
  const currentStep = parseInt(pathname.match(/steps\/(\d+)$/)[1], 10);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: WIDTH,
        height: "100vh",
        backgroundColor: "lightyellow",
        borderRight: "1px solid #dc0",
        boxSizing: "border-box",
        padding: 20,
      }}
    >
      {children}
      {currentStep === 1 && (
        <Link style={{ position: "absolute", bottom: 20, left: 20 }} to="/">
          🏡 Home
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
    </div>
  );
}
