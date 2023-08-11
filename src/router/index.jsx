import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/not-found/NotFound";
import Home from "../pages/home/Home";
import SingleRestaurant from "../pages/single-restaurant/SingleRestaurant";
import ListRestaurants from "../pages/list-restaurant/ListRestaurants";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";
import Checkout from "../pages/Checkout/Checkout";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
