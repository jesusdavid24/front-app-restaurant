import React from "react";
import "./locationForm.scss";

const LocationForm = ({ menuOpen }) => {
   return (
      <div className="form-container">
         <h1 className="title-container">
            <span className="form-title"> The Food You Love, Delivered With Care &nbsp; </span>
         </h1>
         <div className="input-box">
            <input
               type="text"
               id="location"
               className="location-input"
               placeholder="Enter Your Location"
            />
            <input
               type="text"
               id="craving"
               className="craving-input"
               placeholder="What Are You Craving?"
            />
            <button type="submit" className="food-button" disabled={menuOpen}>
               Find Food
            </button>
         </div>
      </div>
   );
};

export default LocationForm;
