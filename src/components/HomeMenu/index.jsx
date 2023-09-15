import { Accordion } from '@mantine/core';
import { Link } from 'react-router-dom';

import './index.scss';

const HomeMenu = ({ onMenuOpen, limit }) => {
  return (
    <nav className='home-menu'>
      <div className='home-menu__back'>
        <button className='home-menu__back__button' onClick={onMenuOpen}>
          BACK
          <i className='bi-chevron-right home-menu__back__button__icon' />
        </button>
      </div>
      <Accordion
        radius='xs'
        disableChevronRotation
        transitionDuration={500}
        chevron={<i className='bi-plus home-menu__accordion__chevron' />}
        className='home-menu__accordion'>
        <Accordion.Item value='home' className='home-menu__accordion__item'>
          <Accordion.Control
            chevron=' '
            className='home-menu__accordion__control'>
            <Link
              to={'/'}
              className='home-menu__accordion__nav'
              onClick={onMenuOpen}>
              HOME
            </Link>
          </Accordion.Control>
        </Accordion.Item>

        <Accordion.Item
          value='restaurant'
          className='home-menu__accordion__item'>
          <Accordion.Control
            className='home-menu__accordion__control'
            chevron=' '>
            <Link
              to={`/restaurants?filter=all&page=1&limit=${limit}`}
              className='home-menu__accordion__nav'
              onClick={onMenuOpen}>
              RESTAURANTS
            </Link>
          </Accordion.Control>
        </Accordion.Item>

        <Accordion.Item value='pages' className='home-menu__accordion__item'>
          <Accordion.Control className='home-menu__accordion__control'>
            PAGES
          </Accordion.Control>

          <Accordion.Panel className='home-menu__accordion__panel'>
            <Link
              to='/checkout'
              className='home-menu__accordion__nav'
              onClick={onMenuOpen}>
              Checkout
            </Link>
          </Accordion.Panel>

          <Accordion.Panel className='home-menu__accordion__panel'>
            <Link
              to='/admin'
              className='home-menu__accordion__nav'
              onClick={onMenuOpen}>
              Admin
            </Link>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </nav>
  );
};

export default HomeMenu;
