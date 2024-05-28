import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home"
import { PageOne } from "./components/1.2_pages/PageOne";
import { PageTwo } from "./components/1.2_pages/PageTwo";
import { PageThree } from "./components/1.2_pages/PageThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page01",
        element: <PageOne />,
      },
      {
        path: "/page02",
        element: <PageTwo />,
      },
      {
        path: "/page03",
        element: <PageThree />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
