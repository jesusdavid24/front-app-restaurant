import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SingleRestaurant, {
  loaderSingleRestaurant,
} from '../pages/SingleRestaurant';
import ListRestaurants from '../pages/ListRestaurant';
import Login from '../components/Login';
import RegistrationPages,
  { loaderRegistration } from '../pages/Registration';
import Checkout from '../pages/Summary';
import DashboardAdmin, {
  loaderDashboardAdmin,
} from '../components/DashboardAdmin';
import PaymentStatus from '../components/PaymentStatus';
import PrivateRoute from '../components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/restaurants',
        element: <ListRestaurants />,
      },
      {
        path: '/restaurants/:id',
        element: <SingleRestaurant />,
        loader: loaderSingleRestaurant,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <RegistrationPages />,
        loader: loaderRegistration,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/admin',
        element: (
          <PrivateRoute>
            <DashboardAdmin />
          </PrivateRoute>
        ),
        loader: loaderDashboardAdmin,
      },
      {
        path: '/payment/status',
        element: <PaymentStatus />,
      },
    ],
  },
]);

export default router;
