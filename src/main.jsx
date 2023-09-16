import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';
import { Provider } from 'react-redux';
import store from './store/redux';
import { RestaurantsProvider } from '../src/store/context/RestaurantsContext.jsx';
import mapboxgl from 'mapbox-gl';
import './index.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY3Jpc3RpYW5qczkzIiwiYSI6ImNsa292YXBvcjBhcDIzcmw5cThnOGl6MTMifQ.K0CoYwD-yvtbr2VDTFecXQ';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RestaurantsProvider>
      <RouterProvider router={router} />
    </RestaurantsProvider>
  </Provider>
);
