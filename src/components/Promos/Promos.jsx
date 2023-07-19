import React from "react";
import "./promos.scss";

const Promos = () => {
   const promo1Url = "../src/assets/img/pizza.jpg";
   const promo2Url = "../src/assets/img/hamburger.jpg";

   return (
      <div className="promo-container">
         <div
            className="promo-1"
            style={{ backgroundImage: `url(${promo1Url})` }}>
            <h1 className="promo-title">Buy 1 Get 1 Free</h1>
            <h2 className="promo-complement">All Pizza</h2>
         </div>
         <div
            className="promo-2"
            style={{ backgroundImage: `url(${promo2Url})` }}>
            <h1 className="promo-title">Only $12</h1>
            <h2 className="promo-complement">Tasty Burger</h2>
         </div>
      </div>
   );
};

export default Promos;
