import React from "react";
import "./bookingPath.scss";

const BookingPath = () => {
   const bookingUrl = "../src/assets/img/bookingPath.jpg";

   return (
      <div
         className="booking__container"
         style={{ backgroundImage: `url(${bookingUrl})` }}>
         <div className="gradient"></div>

         <div className="booking__info">
            <h1 className="booking__title">Super Easy Booking</h1>
            <p className="booking__content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.
            </p>
         </div>
         <div className="path-container">
            <div className="booking__path">
               <img
                  id="logo"
                  src="/src/assets/icons/order.png"
                  className="booking__icon"
               />
               <h2 className="booking__path-message">
                  Order Food Threw Website Or App
               </h2>
            </div>
            <div className="booking__path">
               <img
                  id="logo"
                  src="/src/assets/icons/confirmation.png"
                  className="booking__icon"
               />
               <h2 className="booking__path-message">
                  User Receives Confirmation
               </h2>
            </div>
            <div className="booking__path">
               <img
                  id="logo"
                  src="/src/assets/icons/preparation.png"
                  className="booking__icon"
               />
               <h2 className="booking__path-message">
                  Order Processing & Food Preparation
               </h2>
            </div>
            <div className="booking__path">
               <img
                  id="logo"
                  src="/src/assets/icons/deliver.png"
                  className="booking__icon"
               />
               <h2 className="booking__path-message">
                  Food Is On Its Way To deliver
               </h2>
            </div>
         </div>
      </div>
   );
};

export default BookingPath;
