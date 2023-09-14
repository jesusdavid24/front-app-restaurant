import './index.scss';

const StickyNavigation = ({ menu }) => {
  return (
    <aside className='sticky-nav'>
      <div className='sticky-nav__search'>
        <input
          type='text'
          className='sticky-nav__search__input'
          placeholder='Search dishes...'
        />
        <br />
        <i className='bi bi-search sticky-nav__search__icon' />
      </div>

      <ul className='sticky-nav__list'>
        {menu &&
          menu.map((item, index) => (
            <div key={index} className='sticky-nav__box'>
              <li className='sticky-nav__list__item'>
                <h5
                  className={
                    index === 0
                      ? 'sticky-nav__list__item__category--selected'
                      : 'sticky-nav__list__item__category'
                  }>
                  {item.category}
                </h5>
              </li>
              {item.products.map((product, subIndex) => (
                <li key={product.id} className='sticky-nav__inner-list__item'>
                  <h6
                    className={
                      index === 0 && subIndex === 0
                        ? 'sticky-nav__inner-list__item__product--selected'
                        : 'sticky-nav__inner-list__item__product'
                    }>
                    {product.productName}
                  </h6>
                </li>
              ))}
            </div>
          ))}
      </ul>
    </aside>
  );
};

export default StickyNavigation;
