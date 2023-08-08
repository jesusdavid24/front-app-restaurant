import React, { useState, useEffect } from "react";
import "./bookingPath.scss";

const BookingPath = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="booking-container">
      <h1 className="booking-container__title">Super Easy Booking</h1>
      <div className="booking-container__info-box">
        <p className="booking-container__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo insta obra consequat.
        </p>
      </div>
      <div className="booking-container__path-box">
        <div className="path-box__step">
          <img
            id="logo"
            src="/src/assets/icons/order.png"
            className="path-box__step__icon"
          />
          <h2 className="path-box__step__message">
            Order Food Threw Website Or App
          </h2>
        </div>
        <div className="path-box__step">
          <img
            id="logo"
            src="/src/assets/icons/confirmation.png"
            className="path-box__step__icon"
          />
          <h2 className="path-box__step__message">
            User Receives Confirmation
          </h2>
        </div>
        <div className="path-box__step">
          <img
            id="logo"
            src="/src/assets/icons/preparation.png"
            className="path-box__step__icon"
          />
          <h2 className="path-box__step__message">
            Order Processing & Food Preparation
          </h2>
        </div>
        <div className="path-box__step">
          <img
            id="logo"
            src="/src/assets/icons/deliver.png"
            className="path-box__step__icon"
          />
          <h2 className="path-box__step__message">
            Food Is On Its Way To deliver
          </h2>
        </div>
      </div>
      <img
        src="/src/assets/img/spinner1.png"
        className="booking-container__spinner1"
        style={{
          top: `${(scrollPosition - 800) * 0.05}%`,
          transform: `rotate(${scrollPosition * 0.8}deg)`,
        }}
      />
      <img
        src="/src/assets/img/spinner2.png"
        className="booking-container__spinner2"
        style={{
          top: `${scrollPosition * 0.2}px`,
          transform: `rotate(${scrollPosition * 0.5}deg)`,
        }}
      />
      <img
        src="/src/assets/img/spinner3.png"
        className="booking-container__spinner3"
        style={{
          top: `${scrollPosition * 0.45}px`,
          transform: `rotate(${scrollPosition * 0.5}deg)`,
        }}
      />
    </div>
  );
};

export default BookingPath;
