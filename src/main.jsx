import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import ListRestaurants from "./pages/listRestaurants.jsx";
import Home from "./pages/Home.jsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      {/* <Home /> */}
      <ListRestaurants />
   </React.StrictMode>
);
