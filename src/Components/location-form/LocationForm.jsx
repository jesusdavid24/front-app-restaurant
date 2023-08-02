import React from "react";
import "./locationForm.scss";

const LocationForm = () => {
  return (
    <div className="location-form">
      <h1 className="location-form__title">
        <span className="location-form__title-span">
          The Food You Love, Delivered With Care &nbsp;
        </span>
      </h1>
      <div className="location-form__input-box">
        <input
          type="text"
          id="location"
          className="location-form__input-box__location"
          placeholder="Enter Your Location"
        />
        <input
          type="text"
          id="craving"
          className="location-form__input-box__craving"
          placeholder="What Are You Craving?"
        />
        <button type="submit" className="location-form__input-box__food">
          Find Food
        </button>
      </div>
    </div>
  );
};

export default LocationForm;
