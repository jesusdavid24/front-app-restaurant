import React from "react";
import "./bookingPath.scss";

const BookingPath = () => {
   return (
      <div className="booking-container">
         <div className="booking-container__info-box">
            <h1 className="booking-container__title">Super Easy Booking</h1>
            <p className="booking-container__content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.
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
      </div>
   );
};

export default BookingPath;
