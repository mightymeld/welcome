import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Step from "./step";
import "./index.css";

export const routes = [
  {
    path: "/",
    element: <Step />,
  },
  {
    path: "/step/:step",
    element: <Step />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
