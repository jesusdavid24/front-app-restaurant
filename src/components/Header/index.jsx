import { useState, useEffect, useContext } from 'react';
import { RestaurantsContext } from '../../store/context/RestaurantsContext';
import { Link } from 'react-router-dom';
import HomeMenu from '../HomeMenu';
import HomeMenuWide from '../MenuWide';
import './index.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { limit } = useContext(RestaurantsContext);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Link to={'/'}>
          <img
            id='logo'
            src='/img/logo.png'
            className='header__logo-container__logo'
          />
        </Link>
      </div>

      <div className='header__menu-container'>
        <div className='header__menu-container__row-menu'>
          <HomeMenuWide limit={limit} />
        </div>
        <button
          className='header__menu-container__button'
          onClick={handleMenuOpen}>
          <i className='bi bi-list' />
        </button>
      </div>

      <div className='header__buttons-container'>
        <select className='header__buttons-container__currency'>
          <option value='usd'>USD</option>
          <option value='cop'>COP</option>
          <option value='eur'>EUR</option>
        </select>

        <select className='header__buttons-container__language'>
          <option value='eng'>ENG</option>
          <option value='spa'>ESP</option>
          <option value='ita'>ITA</option>
        </select>

        <button className='header__buttons-container__profile'>
          <Link to='/login'>
            <i className='bi bi-person-fill' />
          </Link>
        </button>

        <button className='header__buttons-container__settings'>
          <i className='bi bi-gear-fill' />
        </button>
        {menuOpen && <HomeMenu onMenuOpen={handleMenuOpen} limit={limit} />}
      </div>
    </header>
  );
};

export default Header;
