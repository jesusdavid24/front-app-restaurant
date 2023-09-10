import StickyNavigation from '../StickyNavigation';
import './index.scss';

const OrderOnline = ({ menu }) => {
  return (
    <div className='restaurant-order'>
      <div className='restaurant-order__scroll-menu'>
        <StickyNavigation menu={menu} />
      </div>
      <div className='restaurant-order__menu'>
        {menu.map((item, index) => (
          <div key={index} className='restaurant-order__menu__section'>
            <h3 className='restaurant-order__menu__category'>
              {item.category}
            </h3>
            <h6 className='restaurant-order__menu__amount'>
              {item.products.length} items
            </h6>
            {item.products.map((product, index) => (
              <div key={index} className='restaurant-order__menu__item'>
                <div className='restaurant-order__menu__item-box'>
                  {index % 2 == 0 ? (
                    <img
                      src='/icons/list-red.png'
                      className='restaurant-order__menu__item-box__image'
                    />
                  ) : (
                    <img
                      src='/icons/list-green.png'
                      className='restaurant-order__menu__item-box__image'
                    />
                  )}{' '}
                  <h5 className='restaurant-order__menu__item-box__name'>
                    {product.productName}
                    {/* {product.name} */}
                  </h5>
                </div>
                <p className='restaurant-order__menu__item-description'>
                  {product.description}
                </p>
                <h5>${product.price}.00</h5>
                <button className='restaurant-order__menu__item-button'>
                  Add
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOnline;
