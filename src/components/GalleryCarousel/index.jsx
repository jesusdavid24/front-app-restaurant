import { Carousel } from '@mantine/carousel';
import './index.scss';

const GalleryCarousel = ({ initialSlide }) => {
  const galleryImages = [
    '/img/gallery1.jpg',
    '/img/gallery2.jpg',
    '/img/gallery3.jpg',
    '/img/gallery4.jpg',
    '/img/gallery5.jpg',
    '/img/gallery6.jpg',
  ];
  return (
    <Carousel loop initialSlide={initialSlide} className='gallery-carousel'>
      {galleryImages.map((image, index) => (
        <div key={index} className='gallery-carousel__slide-container'>
          <div style={{ height: '100%' }}>
            <Carousel.Slide gap={0} className='gallery-carousel__slide'>
              <img src={image} className='gallery-carousel__slide__image' />
            </Carousel.Slide>
            <div className='gallery-carousel__slide__index'>{`${index + 1} of ${
              galleryImages.length
            }`}</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
