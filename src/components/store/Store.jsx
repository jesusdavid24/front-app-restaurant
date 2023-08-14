import React from "react";
import "./index.scss";

const Store = () => {
  return (
    <div className="store">
      <div className="store__main">
        <h1 className="store__title">The best Food app</h1>
        <p className="store__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <h2 className="store__complement">Download App Now...</h2>
        <div className="store__buttons">
          <button className="store__buttons__app-store">
            <img
              id="logo"
              src="/src/assets/icons/apple.png"
              className="store__buttons__icon"
            />
            App Store
          </button>
          <button className="store__buttons__play-store">
            <img
              id="logo"
              src="/src/assets/icons/android.png"
              className="store__buttons__icon"
            />
            Play Store
          </button>
        </div>
      </div>
      <div className="store__image-box"></div>
    </div>
  );
};

export default Store;
