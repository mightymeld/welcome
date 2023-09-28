import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Step1 from "./steps/1";
import Step2 from "./steps/2";
import Step3 from "./steps/3";
import "./index.css";

export const steps = [<Step1 />, <Step2 />, <Step3 />];

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  ...steps.map((step, index) => ({
    path: `/steps/${index + 1}`,
    element: step,
  })),
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
