import React from "react";
import "./orderOnline.scss";
import { restaurants } from "../../assets/data/restaurants";

const OrderOnline = () => {
  const italian = restaurants[0];
  const { menu } = italian;
  //   console.log(menu.bestseller.best);

  return (
    <div className="restaurant-order">
      <div className="restaurant-order__scroll-menu">menu</div>
      <div className="restaurant-order__menu">
        <div className="restaurant-order__menu__bestseller">
          <h3 className="restaurant-order__menu__subcategory">Bestseller</h3>
          <h6 className="restaurant-order__menu__amount">
            {menu.bestseller.best.length} items
          </h6>

          {menu.bestseller.best.map((item, index) => (
            <div className="restaurant-order__menu__item">
              <h5 className="restaurant-order__menu__item-name">
                {index % 2 == 0 ? (
                  <img src="../src/assets/icons/listGreen.png" />
                ) : (
                  <img src="../src/assets/icons/listRed.png" />
                )}{" "}
                {item.name}
              </h5>
              <p className="restaurant-order__menu__item-description">
                {item.description}
              </p>
              <h5>${item.price}.00</h5>
              <button className="restaurant-order__menu__item-button">
                Add
              </button>
            </div>
          ))}
        </div>

        <div className="restaurant-order__menu__quickBites">
          <h3 className="restaurant-order__menu__category">Quick Bites</h3>

          <div className="restaurant-order__menu__quickBites__salad">
            <h3 className="restaurant-order__menu__subcategory">Salad</h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.quickBites.salad.length} items
            </h6>

            {menu.quickBites.salad.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listRed.png" />
                  ) : (
                    <img src="../src/assets/icons/listGreen.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="restaurant-order__menu__quickBites__fries">
            <h3 className="restaurant-order__menu__subcategory">Fries</h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.quickBites.fries.length} items
            </h6>

            {menu.quickBites.fries.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listRed.png" />
                  ) : (
                    <img src="../src/assets/icons/listGreen.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="restaurant-order__menu__quickBites__cheese">
            <h3 className="restaurant-order__menu__subcategory">
              Cheese Sticks
            </h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.quickBites.cheeseSticks.length} items
            </h6>

            {menu.quickBites.cheeseSticks.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listRed.png" />
                  ) : (
                    <img src="../src/assets/icons/listGreen.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="restaurant-order__menu__quickBites__garlic">
            <h3 className="restaurant-order__menu__subcategory">
              Garlic Bread
            </h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.quickBites.garlicBread.length} items
            </h6>

            {menu.quickBites.garlicBread.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listGreen.png" />
                  ) : (
                    <img src="../src/assets/icons/listRed.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="restaurant-order__menu__desserts">
          <h3 className="restaurant-order__menu__category">Desserts</h3>
          <h4 className="restaurant-order__menu__amount">
            {Object.keys(menu.desserts).length} items
          </h4>

          <div className="restaurant-order__menu__desserts__cheesecake">
            <h3 className="restaurant-order__menu__subcategory">Cheesecakes</h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.desserts.cheesecakes.length} items
            </h6>

            {menu.desserts.cheesecakes.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listRed.png" />
                  ) : (
                    <img src="../src/assets/icons/listGreen.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="restaurant-order__menu__desserts__cheesecake">
            <h3 className="restaurant-order__menu__subcategory">Lime Pie</h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.desserts.limePie.length} items
            </h6>

            {menu.desserts.limePie.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listRed.png" />
                  ) : (
                    <img src="../src/assets/icons/listGreen.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="restaurant-order__menu__desserts__cheesecake">
            <h3 className="restaurant-order__menu__subcategory">Cream Dream</h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.desserts.creamDream.length} items
            </h6>

            {menu.desserts.creamDream.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listGreen.png" />
                  ) : (
                    <img src="../src/assets/icons/listRed.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="restaurant-order__menu__desserts__cheesecake">
            <h3 className="restaurant-order__menu__subcategory">
              Rice Pudding
            </h3>
            <h6 className="restaurant-order__menu__amount">
              {menu.desserts.ricePuding.length} items
            </h6>

            {menu.desserts.ricePuding.map((item, index) => (
              <div className="restaurant-order__menu__item">
                <h5 className="restaurant-order__menu__item-name">
                  {index % 2 == 0 ? (
                    <img src="../src/assets/icons/listRed.png" />
                  ) : (
                    <img src="../src/assets/icons/listGreen.png" />
                  )}{" "}
                  {item.name}
                </h5>
                <p className="restaurant-order__menu__item-description">
                  {item.description}
                </p>
                <h5>${item.price}.00</h5>
                <button className="restaurant-order__menu__item-button">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;