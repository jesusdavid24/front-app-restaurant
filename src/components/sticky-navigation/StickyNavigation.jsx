import React from "react";
import "./stickyNavigation.scss";

const StickyNavigation = () => {
  return (
    <nav className="sticky-nav">
      <div className="sticky-nav__search">
        <input
          type="text"
          className="sticky-nav__search__input"
          placeholder="Search dishes..."
        />
        <br />
        <i className="bi bi-search sticky-nav__search__icon" />
      </div>

      <ul className="sticky-nav__list">
        <li className="sticky-nav__list__item">
          <h5 className="sticky-nav__list__item__category--selected">
            Bestseller
          </h5>
        </li>
        <li className="sticky-nav__list__item">
          <h5 className="sticky-nav__list__item__category">Quick Bites</h5>
          <ul className="sticky-nav__inner-list">
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Potato Chips
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory--selected">
                Salad
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Fries
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Cheese Sticks
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Garlic Bread
              </h6>
            </li>
          </ul>
        </li>
        <li className="sticky-nav__list__item">
          <h5 className="sticky-nav__list__item__category">Sandwich</h5>
        </li>
        <li className="sticky-nav__list__item">
          <h5 className="sticky-nav__list__item__category">Pizza</h5>
        </li>
        <li className="sticky-nav__list__item">
          <h5 className="sticky-nav__list__item__category">Combo</h5>
        </li>
        <li className="sticky-nav__list__item">
          <h5 className="sticky-nav__list__item__category">Desserts</h5>
          <ul className="sticky-nav__inner-list">
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Cheesecake
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Lime Pie
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Cream Dream
              </h6>
            </li>
            <li className="sticky-nav__inner-list__item">
              <h6 className="sticky-nav__inner-list__item__subcategory">
                Rice Pudding
              </h6>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavigation;
