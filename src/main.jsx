import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import "./index.scss";
import mapboxgl from "mapbox-gl";
import "bootstrap/scss/bootstrap.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3Jpc3RpYW5qczkzIiwiYSI6ImNsa292YXBvcjBhcDIzcmw5cThnOGl6MTMifQ.K0CoYwD-yvtbr2VDTFecXQ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
