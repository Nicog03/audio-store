import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Logo from "./components/Logo.tsx";
import "./main.css";
import SignInPage from "./pages/SignInPage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: ":category",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage mode={"signin"} />,
  },
  {
    path: "/signup",
    element: <SignInPage mode={"signup"} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
