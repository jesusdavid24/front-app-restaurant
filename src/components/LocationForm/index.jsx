import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const LocationForm = ({ limit }) => {
  const [craving, setCraving] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setCraving(value);
  };

  return (
    <div className='location-form'>
      <h1 className='location-form__title'>
        <span className='location-form__title-span'>
          The Food You Love, Delivered With Care &nbsp;
        </span>
      </h1>
      <form className='location-form__input-box'>
        <input
          type='text'
          id='location'
          className='location-form__input-box__location'
          placeholder='Enter Your Location'
          autoComplete='off'
        />
        <input
          type='text'
          id='craving'
          value={craving}
          className='location-form__input-box__craving'
          placeholder='What Are You Craving?'
          autoComplete='off'
          onChange={handleChange}
        />
        <Link
          to={`/restaurants?filter=all&page=1limit=${limit}&cuisine=${craving}`}
          className='location-form__input-box__link'>
          <button type='button' className='location-form__input-box__food'>
            Find Food
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LocationForm;
