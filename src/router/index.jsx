import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SingleRestaurant, {
  loaderSingleRestaurant,
} from '../pages/SingleRestaurant';
import ListRestaurants from '../pages/ListRestaurant';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Checkout from '../pages/Summary';
import DashboardAdmin, { loaderDashboardAdmin } from '../components/DashboardAdmin';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
        element: <Registration />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/admin',
        element: <DashboardAdmin />,
        loader: loaderDashboardAdmin,
      },
    ],
  },
]);

export default router;
