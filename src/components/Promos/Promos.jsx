import React from "react";
import "./promos.scss";

const Promos = () => {
  return (
    <div className="promo">
      <div className="promo__first">
        <div className="promo__first__slide-box">
          <div
            className="promo__first__slide-box__item"
            style={{
              backgroundImage: 'url("../src/assets/img/promo1.1.jpg")',
            }}
          >
            <h1 className="promo__title">Buy 1 Get 1 Free</h1>
            <h2 className="promo__complement">All Pizza</h2>
          </div>

          <div
            className="promo__first__slide-box__item"
            style={{
              backgroundImage: 'url("../src/assets/img/promo1.2.jpg")',
            }}
          >
            <h1 className="promo__title">All You Can Eat</h1>
            <h2 className="promo__complement">Only Meat</h2>
          </div>

          <div
            className="promo__first__slide-box__item"
            style={{
              backgroundImage: 'url("../src/assets/img/promo1.3.jpg")',
            }}
          >
            <h1 className="promo__title">You Deserve It</h1>
            <h2 className="promo__complement">Less Than $10</h2>
          </div>
        </div>
      </div>

      <div className="promo__second">
        <div className="promo__second__slide-box">
          <div
            className="promo__second__slide-box__item"
            style={{
              backgroundImage: 'url("../src/assets/img/promo2.1.jpg")',
            }}
          >
            <h1 className="promo__title">Healthy Fits You</h1>
            <h2 className="promo__complement">Breakfast for 2</h2>
          </div>

          <div
            className="promo__second__slide-box__item"
            style={{
              backgroundImage: 'url("../src/assets/img/promo2.2.jpg")',
            }}
          >
            <h1 className="promo__title">Cheap And Juicy?</h1>
            <h2 className="promo__complement">The Best Sushi</h2>
          </div>

          <div
            className="promo__second__slide-box__item"
            style={{
              backgroundImage: 'url("../src/assets/img/promo2.3.jpg")',
            }}
          >
            <h1 className="promo__title">Only $12</h1>
            <h2 className="promo__complement">Tasty Burger</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
