import React from "react";
import "./restaurantGallery.scss";

const RestaurantGallery = () => {
  const galleryImages = [
    "../src/assets/img/gallery1.jpg",
    "../src/assets/img/gallery2.jpg",
    "../src/assets/img/gallery3.jpg",
    "../src/assets/img/gallery4.jpg",
    "../src/assets/img/gallery5.jpg",
    "../src/assets/img/gallery6.jpg",
  ];

  return (
    <div className="restaurant-gallery">
      {galleryImages.map((image, index) => (
        <div key={index} className="restaurant-gallery__box">
          <img src={image} className="restaurant-gallery__box__image" />
        </div>
      ))}
    </div>
  );
};

export default RestaurantGallery;
