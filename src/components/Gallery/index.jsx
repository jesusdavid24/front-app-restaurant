import { useState, useEffect } from 'react';
import GalleryCarousel from '../GalleryCarousel';
import './index.scss';

const Gallery = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  useEffect(() => {
    if (carouselOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [carouselOpen]);

  const galleryImages = [
    '/img/gallery1.jpg',
    '/img/gallery2.jpg',
    '/img/gallery3.jpg',
    '/img/gallery4.jpg',
    '/img/gallery5.jpg',
    '/img/gallery6.jpg',
  ];

  const handleCarousel = (event) => {
    setCarouselOpen(!carouselOpen);

    const id = event.target.id;
    setInitialSlide(id);
  };

  return (
    <div className='gallery'>
      {galleryImages.map((image, index) => (
        <div key={index} className='gallery__box'>
          <img src={image} className='gallery__box__image' />
          <div
            id={index}
            className='gallery__box__overlay'
            onClick={handleCarousel}>
            <img
              id={index}
              src='/icons/gallery-icon.png'
              className='gallery__box__overlay__icon'
              onClick={handleCarousel}
            />
          </div>
        </div>
      ))}
      {carouselOpen ? (
        <div className='gallery__modal'>
          <div className='gallery__modal__icon-container'>
            <img
              src='/icons/gallery-icon.png'
              className='gallery__modal__icon-container__icon'
              onClick={handleCarousel}
            />
          </div>

          <div className='gallery__modal__carousel-container'>
            <GalleryCarousel initialSlide={initialSlide} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
