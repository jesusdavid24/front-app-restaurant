import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import MenuSlider from "../MenuSlider";
import "./index.scss";

const FilterMenu = ({ handleBoxAndMenuOpen }) => {
  const handleMenuOpen = (event) => {
    handleBoxAndMenuOpen(event);
  };

  const [selectedPopular, setSelectedPopular] = useState(null);
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

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
          <i className="bi bi-search filters__menu__back__search__icon" />
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
              chevron={
                <i className='bi bi-dash filters__menu__sub-menu__close' />
              }
              disableChevronRotation
              defaultValue={['popular']}
              transitionDuration={500}>
              <Accordion.Item value='popular'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Popular
                </Accordion.Control>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedPopular === "p1"}
                      onChange={() => setSelectedPopular("p1")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Free Delivery
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedPopular === "p2"}
                      onChange={() => setSelectedPopular("p2")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Reached In 20 Min
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedPopular === "p3"}
                      onChange={() => setSelectedPopular("p3")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>Pure Veg</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedPopular === "p4"}
                      onChange={() => setSelectedPopular("p4")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>Non Veg</h2>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              chevron={
                <i className='bi bi-dash filters__menu__sub-menu__close' />
              }
              disableChevronRotation
              defaultValue={['cuisines']}
              transitionDuration={800}>
              <Accordion.Item value='cuisines'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Cuisines
                </Accordion.Control>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>Asian</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>SeaFood</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>Italian</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>Pizza</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>Western</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>Chinese</h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type='checkbox'
                      className='filters__menu__sub-menu__checkbox'
                    />
                    <h2 className='filters__menu__sub-menu__title'>Dessert</h2>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              chevron={
                <i className='bi bi-dash filters__menu__sub-menu__close' />
              }
              disableChevronRotation
              defaultValue={['star']}
              transitionDuration={500}>
              <Accordion.Item value='star'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Star Category
                </Accordion.Control>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedStart === "sc1"}
                      onChange={() => setSelectedStart("sc1")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      <span className='filters__menu__sub-menu__stars'>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <img
                            key={item}
                            src="/icons/star-fill.png"
                            style={{ width: "14px", height: "14px" }}
                          />
                        ))}
                      </span>
                      (4025)
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedStart === "sc2"}
                      onChange={() => setSelectedStart("sc2")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      <span className='filters__menu__sub-menu__stars'>
                        {[1, 2, 3, 4, 5].map((item) =>
                          item <= 4 ? (
                            <img
                              key={item}
                              src="/icons/star-fill.png"
                              style={{ width: "14px", height: "14px" }}
                            />
                          ) : (
                            <img
                              key={item}
                              src="/icons/star.png"
                              style={{ width: "14px", height: "14px" }}
                            />
                          )
                        )}
                      </span>
                      (2012)
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedStart === "sc3"}
                      onChange={() => setSelectedStart("sc3")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      <span className='filters__menu__sub-menu__stars'>
                        {[1, 2, 3, 4, 5].map((item) =>
                          item <= 3 ? (
                            <img
                              key={item}
                              src="/icons/star-fill.png"
                              style={{ width: "14px", height: "14px" }}
                            />
                          ) : (
                            <img
                              key={item}
                              src="/icons/star.png"
                              style={{ width: "14px", height: "14px" }}
                            />
                          )
                        )}
                      </span>
                      (25)
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedStart === "sc4"}
                      onChange={() => setSelectedStart("sc4")}
                    />

                    <h2 className='filters__menu__sub-menu__title'>
                      <span className='filters__menu__sub-menu__stars'>
                        {[1, 2, 3, 4, 5].map((item) =>
                          item <= 2 ? (
                            <img
                              key={item}
                              src="/icons/star-fill.png"
                              style={{ width: "14px", height: "14px" }}
                            />
                          ) : (
                            <img
                              key={item}
                              src="/icons/star.png"
                              style={{ width: "14px", height: "14px" }}
                            />
                          )
                        )}
                      </span>
                      (3)
                    </h2>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion
              chevron={
                <i className='bi bi-dash filters__menu__sub-menu__close' />
              }
              disableChevronRotation
              defaultValue={['cost']}
              transitionDuration={500}>
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
              chevron={
                <i className='bi bi-dash filters__menu__sub-menu__close' />
              }
              disableChevronRotation
              defaultValue={['delivery']}
              transitionDuration={500}>
              <Accordion.Item value='delivery'>
                <Accordion.Control className='filters__menu__sub-control'>
                  Delivery Time
                </Accordion.Control>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedDelivery === "dt1"}
                      onChange={() => setSelectedDelivery("dt1")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Upto 20 Minutes
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedDelivery === "dt2"}
                      onChange={() => setSelectedDelivery("dt2")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Upto 30 Minutes
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedDelivery === "dt3"}
                      onChange={() => setSelectedDelivery("dt3")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Upto 45 Minutes
                    </h2>
                  </div>
                </Accordion.Panel>
                <Accordion.Panel>
                  <div className='filters__menu__sub-menu'>
                    <input
                      type="checkbox"
                      className="filters__menu__sub-menu__checkbox"
                      checked={selectedDelivery === "dt4"}
                      onChange={() => setSelectedDelivery("dt4")}
                    />
                    <h2 className='filters__menu__sub-menu__title'>
                      Upto 60 Minutes
                    </h2>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

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
