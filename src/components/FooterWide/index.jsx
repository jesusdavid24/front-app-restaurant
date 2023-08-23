import React from 'react';
import MapBox from '../MapBox';
import './index.scss';

const FooterWide = ({ coordinates }) => {
  return (
    <div className='footer-wide'>
      <div className='footer-wide__contact-box'>
        <div className='footer-wide__contact-box__logo-container'>
          <img
            id='logo'
            src='/src/assets/icons/logo2.png'
            className='footer-wide__contact-box__logo'
          />
          <h1 id='logo' className='footer-wide__contact-box__title'>
            RICA
          </h1>
        </div>
        <p className='footer-wide__contact-box__content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. A It has survived not only
          five centuries
        </p>
        <h2 className='footer-wide__contact-box__data'>
          <img
            id='logo'
            src='/src/assets/icons/position.png'
            className='footer-wide__contact-box__icon'
          />
          &nbsp; A-32, Albany, New York.
        </h2>
        <h2 className='footer-wide__contact-box__data'>
          <img
            id='logo'
            src='/src/assets/icons/telephone.png'
            className='footer-wide__contact-box__icon'
          />
          &nbsp; 518 - 457 - 5181
        </h2>
        <h2 className='footer-wide__contact-box__data'>
          <img
            id='logo'
            src='/src/assets/icons/mail.png'
            className='footer-wide__contact-box__icon'
          />
          &nbsp; Contact@Gmail.com
        </h2>
      </div>
      <div className='footer-wide__links'>
        <h3 className='footer-wide__section'>Useful Links</h3>
        <div className='footer-wide__list'>
          <h4 className='footer-wide__list__item'>Home</h4>
          <h4 className='footer-wide__list__item'>Our Vehical</h4>
          <h4 className='footer-wide__list__item'>Latest Video</h4>
          <h4 className='footer-wide__list__item'>Services</h4>
          <h4 className='footer-wide__list__item'>Booking Deal</h4>
          <h4 className='footer-wide__list__item'>Emergency Call</h4>
          <h4 className='footer-wide__list__item'>Mobile App</h4>
        </div>
      </div>
      <div className='footer-wide__about'>
        <h3 className='footer-wide__section'>About</h3>
        <div className='footer-wide__list'>
          <h4 className='footer-wide__list__item'>About us</h4>
          <h4 className='footer-wide__list__item'>FAQ</h4>
          <h4 className='footer-wide__list__item'>Login</h4>
          <h4 className='footer-wide__list__item'>Register</h4>
          <h4 className='footer-wide__list__item'>Terms & Co.</h4>
          <h4 className='footer-wide__list__item'>Privacy</h4>
          <h4 className='footer-wide__list__item'>Support</h4>
        </div>
      </div>
      <div className='footer-wide__location'>
        <h3 className='footer-wide__section'>Our location</h3>
        <div className='footer-wide__location__map'>
          <MapBox coordinates={coordinates} />
        </div>
      </div>
      <div className='footer-wide__topics'>
        <h3 className='footer-wide__section'>News Topics</h3>

        <div className='footer-wide__topics__item-box'>
          <div className='footer-wide__topics__item-box__image-container'>
            <img
              src='../src/assets/img/taxi.jpg'
              className='footer-wide__topics__item-box__image'
            />
          </div>

          <div className='footer-wide__topics__item-box__info-container'>
            <h1 className='footer-wide__topics__item-box__title'>
              Recent News
            </h1>
            <p className='footer-wide__topics__item-box__content'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </div>

        <div className='footer-wide__topics__item-box'>
          <div className='footer-wide__topics__item-box__image-container'>
            <img
              src='../src/assets/img/taxi2.jpg'
              className='footer-wide__topics__item-box__image'
            />
          </div>
          <div className='footer-wide__topics__item-box__info-container'>
            <h1 className='footer-wide__topics__item-box__title'>
              Recent News
            </h1>
            <p className='footer-wide__topics__item-box__content'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWide;
