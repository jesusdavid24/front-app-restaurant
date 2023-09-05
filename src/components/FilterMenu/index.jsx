import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '@mantine/core';
import MenuSlider from '../MenuSlider';
import { cuisinesFilters } from '../../assets/data/cuisinesFilters';
import './index.scss';

const FilterMenu = ({
  handleBoxAndMenuOpen,
  search,
  cuisine,
  star,
  delivery,
}) => {
  const [open, setOpen] = useState(0);
  const [filterObejct, setFilterObejct] = useState({
    cuisine: '',
    star: '',
    delivery: '',
  });
  const [selectedPopular, setSelectedPopular] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);
  const [selectedDelivery, setSelecteddelivery] = useState(null);

  useEffect(() => {
    setSelectedCuisine(cuisine);
    setSelectedStar(star);
    setSelecteddelivery(delivery);
  }, [search]);

  const handleChange = (event) => {
    const { name, id } = event.target;

    name == 'cuisine' && setSelectedCuisine(id);
    name == 'star' && setSelectedStar(id);
    name == 'delivery' && setSelecteddelivery(id);

    setFilterObejct({ ...filterObejct, [name]: `&${name}=${id}` });
  };

  const handleMenuOpen = (event) => {
    handleBoxAndMenuOpen(event);
  };

  const handleOpen = (id) => {
    if (open == id) {
      return setOpen(0);
    }
    setOpen(id);
  };

  const handleClear = () => {
    setSelectedPopular(null);
    setSelectedCuisine(null);
    setSelectedStar(null);
    setSelecteddelivery(null);
  };

  return (
    <nav className='filters__menu'>
      <div className='filters__menu__back'>
        <button
          className='filters__menu__back__button'
          id='filter-menu-open-button'
          onClick={handleMenuOpen}>
          Back
        </button>
        <div className='filters__menu__back__search'>
          <input
            type='text'
            className='filters__menu__back__search__input'
            placeholder='Search here...'
          />
          <br />
          <i className='bi bi-search filters__menu__back__search__icon' />
        </div>
      </div>
      <Accordion
        chevron={
          <img
            src='/icons/filters-menu.png'
            className='filters__menu-box__button'
          />
        }
        disableChevronRotation
        defaultValue={['latest']}
        radius='xs'
        transitionDuration={1000}>
        <Accordion.Item value='latest'>
          <Accordion.Control className='filters__menu__main-control'>
            Latest Filter
          </Accordion.Control>
          <Accordion.Panel>
            <Accordion
              id='1'
              chevron={
                open == '1' ? (
                  <i className='bi bi-dash filters__menu__sub-menu__close' />
                ) : (
                  <i className='bi bi-plus filters__menu__sub-menu__close' />
                )
              }
              disableChevronRotation
              defaultValue={['popular']}
              transitionDuration={500}
              onChange={() => handleOpen('1')}>
              <Accordion.Item value='popular'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Popular
                </Accordion.Control>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                      checked={selectedPopular === 'p1'}
                      onChange={() => setSelectedPopular('p1')}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Free Delivery
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                      checked={selectedPopular === 'p2'}
                      onChange={() => setSelectedPopular('p2')}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Reached In 20 Min
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                      checked={selectedPopular === 'p3'}
                      onChange={() => setSelectedPopular('p3')}
                    />
                    <h2 className='filters__menu__sub-menu__title'>Pure Veg</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                      checked={selectedPopular === 'p4'}
                      onChange={() => setSelectedPopular('p4')}
                    />
                    <h2 className='filters__menu__sub-menu__title'>Non Veg</h2>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              id='2'
              chevron={
                open == '2' ? (
                  <i className='bi bi-dash filters__menu__sub-menu__close' />
                ) : (
                  <i className='bi bi-plus filters__menu__sub-menu__close' />
                )
              }
              disableChevronRotation
              defaultValue={['cuisines']}
              transitionDuration={800}
              onChange={() => handleOpen('2')}>
              <Accordion.Item value='cuisines'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Cuisines
                </Accordion.Control>
                {cuisinesFilters.map((cuisine, index) => (
                  <Accordion.Panel key={index + 1}>
                    <div className='filters__menu__sub-menu'>
                      <input
                        id={cuisine}
                        name='cuisine'
                        type='checkbox'
                        checked={selectedCuisine == cuisine}
                        className='filters__menu__sub-menu__checkbox'
                        onClick={handleChange}
                      />
                      <h2 className='filters__menu__sub-menu__title'>
                        {cuisine}
                      </h2>
                    </div>
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              id='3'
              chevron={
                open == '3' ? (
                  <i className='bi bi-dash filters__menu__sub-menu__close' />
                ) : (
                  <i className='bi bi-plus filters__menu__sub-menu__close' />
                )
              }
              disableChevronRotation
              defaultValue={['star']}
              transitionDuration={500}
              onChange={() => handleOpen('3')}>
              <Accordion.Item value='star'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Star Category
                </Accordion.Control>
                {[5, 4, 3, 2].map((item) => (
                  <Accordion.Panel key={item}>
                    <div className='filters__menu__sub-menu'>
                      <input
                        id={item}
                        name='star'
                        type='checkbox'
                        className='filters__menu__sub-menu__checkbox'
                        checked={selectedStar == item}
                        onClick={handleChange}
                        readOnly
                      />
                      <h2 className='filters__menu__sub-menu__title'>
                        <span className='filters__menu__sub-menu__stars'>
                          {[1, 2, 3, 4, 5].map((subItem) =>
                            subItem <= item ? (
                              <img
                                key={subItem}
                                src='/icons/star-fill.png'
                                style={{ width: '14px', height: '14px' }}
                              />
                            ) : (
                              <img
                                key={subItem}
                                src='/icons/star.png'
                                style={{ width: '14px', height: '14px' }}
                              />
                            )
                          )}
                        </span>
                        (2012)
                      </h2>
                    </div>
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              id='4'
              chevron={
                open == '4' ? (
                  <i className='bi bi-dash filters__menu__sub-menu__close' />
                ) : (
                  <i className='bi bi-plus filters__menu__sub-menu__close' />
                )
              }
              disableChevronRotation
              defaultValue={['cost']}
              transitionDuration={500}
              onChange={handleOpen}>
              <Accordion.Item value='cost'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Cost For Two
                </Accordion.Control>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu__slider'>
                    <MenuSlider />
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              id='5'
              chevron={
                open == 5 ? (
                  <i className='bi bi-dash filters__menu__sub-menu__close' />
                ) : (
                  <i className='bi bi-plus filters__menu__sub-menu__close' />
                )
              }
              disableChevronRotation
              defaultValue={['delivery']}
              transitionDuration={500}
              onChange={handleOpen}>
              <Accordion.Item value='delivery'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Delivery Time
                </Accordion.Control>
                {[20, 30, 45, 60].map((item, index) => (
                  <Accordion.Panel key={index + 1}>
                    <div className='filters__menu__sub-menu'>
                      <input
                        id={item}
                        name='delivery'
                        type='checkbox'
                        className='filters__menu__sub-menu__checkbox'
                        checked={selectedDelivery == item}
                        onClick={handleChange}
                        readOnly
                      />
                      <h2 className='filters__menu__sub-menu__title'>
                        Upto {item} Minutes
                      </h2>
                    </div>
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <div className='filters__menu__clear-box'>
        <Link
          to={`/restaurants?filter=all&page=1&limit=12${Object.values(
            filterObejct
          ).join('')}`}>
          <button className='filters__menu__clear-box__button'>Send</button>
        </Link>
        <Link to='/restaurants?filter=all&page=1&limit=12'>
          <button
            className='filters__menu__clear-box__button'
            onClick={handleClear}>
            Clear
          </button>
        </Link>
      </div>

      <div className='filters__menu__help-box'>
        <button className='filters__menu__help-box__button'>
          <i className='bi bi-info-circle filters__menu__help-box__icon' />
          Need Help
        </button>
        <h2 className='filters__menu__help-box__telephone'>856 - 215 - 211</h2>
        <h2 className='filters__menu__help-box__schedule'>
          Monday to Friday 9.00am - 7.30pm
        </h2>
      </div>
    </nav>
  );
};

export default FilterMenu;
