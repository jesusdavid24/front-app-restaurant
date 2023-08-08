import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ListRestaurants from "../pages/ListRestaurant/ListRestaurants";
import SingleRestaurant from "../pages/SingleRestaurant/SingleRestaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/restaurants",
        element: <ListRestaurants />,
      },
      {
        path: "/restaurants/:id",
        element: <SingleRestaurant />,
      },
    ],
  },
]);

export default router;
