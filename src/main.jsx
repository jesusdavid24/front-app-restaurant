import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import router from "./router/index.jsx";
import "./index.scss";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3Jpc3RpYW5qczkzIiwiYSI6ImNsa292YXBvcjBhcDIzcmw5cThnOGl6MTMifQ.K0CoYwD-yvtbr2VDTFecXQ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
