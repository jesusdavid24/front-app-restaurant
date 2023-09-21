import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import router from './router/index.jsx';
import { Provider } from 'react-redux';
import store from './store/redux';
import { RestaurantsProvider } from '../src/store/context/RestaurantsContext.jsx';
import mapboxgl from 'mapbox-gl';
import './index.scss';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-wbyb18go3mfzuw2p.us.auth0.com"
      clientId="TtXabps3punVzCeMfXpIcSn1tzItBoLv"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <RestaurantsProvider>
      <RouterProvider router={router} />
    </RestaurantsProvider>
    </Auth0Provider>
  </Provider>
);
