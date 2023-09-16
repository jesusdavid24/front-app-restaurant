import React from 'react';
import './index.scss';

const RestaurantOptions = () => {
  const handleClick = (event) => {
    const currentElement = event.target;
    const selectedElement = document.querySelector(
      '.restaurant-options__menu__item--selected'
    );

    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          'restaurant-options__menu__item--selected'
        );
      currentElement.classList.toggle(
        'restaurant-options__menu__item--selected'
      );
    }

    const id = event.target.id;
    const divs = document.querySelectorAll(
      '.single-restaurant__principal__options-box__election'
    );

    divs.forEach((item) => {
      item.id != id
        ? item.classList.add(
            'single-restaurant__principal__options-box__election--inactive'
          )
        : item.classList.remove(
            'single-restaurant__principal__options-box__election--inactive'
          );
    });
  };

  return (
    <div className='restaurant-options'>
      <ul className='restaurant-options__menu'>
        <li
          id='order'
          className='restaurant-options__menu__item restaurant-options__menu__item--selected'
          onClick={handleClick}>
          Order Online
        </li>
        <li
          id='overview'
          className='restaurant-options__menu__item'
          onClick={handleClick}>
          Overview
        </li>
        <li
          id='gallery'
          className='restaurant-options__menu__item'
          onClick={handleClick}>
          Gallery
        </li>
        <li
          id='location'
          className='restaurant-options__menu__item'
          onClick={handleClick}>
          Location
        </li>
        <li
          id='booking'
          className='restaurant-options__menu__item'
          onClick={handleClick}>
          Book A Table
        </li>
        <li
          id='reviews'
          className='restaurant-options__menu__item'
          onClick={handleClick}>
          Reviews
        </li>
      </ul>
    </div>
  );
};
export default RestaurantOptions;
