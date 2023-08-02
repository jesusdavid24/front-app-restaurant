import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ListRestaurants from "../pages/ListRestaurants";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/restaurants",
        element: <ListRestaurants />
      }
    ]
  }
]);

export default router;
