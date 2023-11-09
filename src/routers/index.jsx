import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Card from "../pages/Card";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);
