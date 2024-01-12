import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./app";
import { Tutorial } from "./tutorial";
import "./index.css";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/step/:step",
    element: <Tutorial />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
