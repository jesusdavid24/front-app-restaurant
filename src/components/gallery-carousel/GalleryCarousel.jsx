import React from "react";
import { Carousel } from "@mantine/carousel";
import "./galleryCarousel.scss";

const GalleryCarousel = ({ initialSlide }) => {
  const galleryImages = [
    "../src/assets/img/gallery1.jpg",
    "../src/assets/img/gallery2.jpg",
    "../src/assets/img/gallery3.jpg",
    "../src/assets/img/gallery4.jpg",
    "../src/assets/img/gallery5.jpg",
    "../src/assets/img/gallery6.jpg",
  ];
  return (
    <Carousel loop initialSlide={initialSlide} className="gallery-carousel">
      {galleryImages.map((image, index) => (
        <div className="gallery-carousel__slide-container">
          <div style={{ height: "100%" }}>
            <Carousel.Slide gap={0} className="gallery-carousel__slide">
              <img src={image} className="gallery-carousel__slide__image" />
            </Carousel.Slide>
            <div className="gallery-carousel__slide__index">{`${index + 1} of ${
              galleryImages.length
            }`}</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
