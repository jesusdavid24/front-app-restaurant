import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../Pages/not-found/NotFound";
import Home from "../Pages/home/Home";
import SingleRestaurant from "../Pages/single-restaurant/SingleRestaurant";
import ListRestaurants from "../Pages/list-restaurant/ListRestaurants";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";
import Checkout from "../Pages/checkout-app/Checkout";
import PaymentStatus from "../components/payment-status/PaymentStatus";
import PaymentFailed from "../components/payment-failed/PaymentFailed";

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
      {
        path: "/payment-status",
        element: <PaymentStatus />
      },
      {
        path: "/payment-failed",
        element: <PaymentFailed />
      },
    ]
  }
]);

export default router;
