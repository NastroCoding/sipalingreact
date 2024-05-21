import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/bootstrap.css";
import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DetailGames from "./pages/DetailGames.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/game/:slug/:version",
        element : <DetailGames/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
