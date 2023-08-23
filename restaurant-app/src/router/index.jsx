import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SingleRestaurant from "../pages/SingleRestaurant";
import ListRestaurants from "../pages/ListRestaurant";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Checkout from "../pages/Summary"
import PaymentStatus from "../components/PaymentStatus";
import PaymentFailed from "../components/PaymentFailed";

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
