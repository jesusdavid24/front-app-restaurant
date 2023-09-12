import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';
import { Provider } from 'react-redux';
import store from './store/redux/index.js';
import './index.scss';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = `${import.meta.env.MAPBOX_ACCESS_TOKEN}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
