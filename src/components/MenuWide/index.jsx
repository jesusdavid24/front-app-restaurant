import { Accordion } from '@mantine/core';
import { Link } from 'react-router-dom';
import './index.scss';

const HomeMenuWide = ({ limit }) => {
  const handleClick = (event) => {
    const currentElement = event.target;
    const selectedElement = document.querySelector(
      '.mantine-Accordion-label--selected'
    );
    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove('mantine-Accordion-label--selected');
      currentElement.classList.toggle('mantine-Accordion-label--selected');
    }
    currentElement == selectedElement &&
      currentElement.classList.toggle('mantine-Accordion-label--selected');
  };
  return (
    <div className='home-menu-wide'>
      <Accordion
        radius='xs'
        disableChevronRotation
        transitionDuration={500}
        chevron={false}
        className='home-menu-wide__accordion'>
        <Accordion.Item
          value='home'
          className='home-menu-wide__accordion__item'>
          <Accordion.Control
            className='home-menu-wide__accordion__control'
            onClick={handleClick}>
            <Link to={'/'} className='home-menu-wide__accordion__nav'>
              HOME
            </Link>
          </Accordion.Control>
        </Accordion.Item>

        <Accordion.Item
          value='restaurant'
          className='home-menu-wide__accordion__item'>
          <Accordion.Control
            className='home-menu-wide__accordion__control'
            onClick={handleClick}>
            <Link
              to={`/restaurants?filter=all&page=1&limit=${limit}`}
              className='home-menu-wide__accordion__nav'>
              RESTAURANTS
            </Link>
          </Accordion.Control>
        </Accordion.Item>

        <Accordion.Item
          value='pages'
          className='home-menu-wide__accordion__item'>
          <Accordion.Control
            className='home-menu-wide__accordion__control'
            onClick={handleClick}>
            PAGES
          </Accordion.Control>
          <div className='home-menu-wide__accordion__panel-box'>
            <Accordion.Panel className='home-menu-wide__accordion__panel'>
              <Link to='/checkout' className='home-menu-wide__accordion__nav'>
                Checkout
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className='home-menu-wide__accordion__panel'>
              <Link to='/admin' className='home-menu-wide__accordion__nav'>
                Admin
              </Link>
            </Accordion.Panel>
          </div>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default HomeMenuWide;
