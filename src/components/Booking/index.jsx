import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  postBooking,
  postDate,
  postRestaurantId,
  selectBooking,
  clearBooking,
} from '../../store/redux/slices/bookingSlice';
import { useForm } from '../../hooks/useForm';
import { DateTimePicker } from '@mantine/dates';
import { validateField } from '../../utils/validateField';
import toast from '../../utils/toast/Toast';
import './index.scss';

const Booking = ({ restaurant }) => {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    bookingEmail: '',
    phone: '',
    persons: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const booking = useSelector(selectBooking);

  const { form, handleChange } = useForm({});

  useEffect(() => {
    dispatch(postRestaurantId(restaurant.id));
  }, []);

  const email = localStorage.getItem('email');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    handleChange(e);

    const errorMessage = validateField(name, value);

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handlePickerChange = (date) => {
    const transformDate = date.toISOString();
    dispatch(postDate(transformDate));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => typeof error === 'string')) {
      return toast.fire({
        icon: 'error',
        title: 'Invalid fields',
      });
    }

    if (email) {
      dispatch(postBooking(form));
      toast.fire({
        icon: 'success',
        title: 'Order created',
      });
      dispatch(clearBooking());
      navigate('/payment/status');
    } else {
      toast.fire({
        icon: 'error',
        title: 'You must log in to booking',
      });
    }
  };

  return (
    <form className='booking' onSubmit={handleSubmit}>
      <button type='button' onClick={() => console.log(booking)}>
        booking
      </button>
      <button type='button' onClick={() => console.log(errors)}>
        errors
      </button>

      <div className='booking__user-name'>
        <div className='booking__input-wrapper'>
          <input
            name='firstName'
            type='text'
            className='booking__input'
            placeholder='First name'
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <span className='booking__input-wrapper__error'>
              {errors.firstName}
            </span>
          )}
        </div>
        <div className='booking__input-wrapper'>
          <input
            name='lastName'
            type='text'
            className='booking__input'
            placeholder='Last name'
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <span className='booking__input-wrapper__error'>
              {errors.lastName}
            </span>
          )}
        </div>
      </div>

      <div className='booking__user-communication'>
        <div className='booking__input-wrapper'>
          <input
            name='bookingEmail'
            type='email'
            className='booking__input booking__input--email'
            placeholder='Email'
            onChange={handleInputChange}
          />
          {errors.bookingEmail && (
            <span className='booking__input-wrapper__error'>
              {errors.bookingEmail}
            </span>
          )}
        </div>
        <div className='booking__input-wrapper'>
          <input
            name='phone'
            type='number'
            className='booking__input booking__input--number'
            placeholder='Phone No:'
            onChange={handleInputChange}
          />
          {errors.phone && (
            <span className='booking__input-wrapper__error'>
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className='booking__date-picker'>
        <DateTimePicker
          name='date'
          className='booking__date-picker__date-input'
          valueFormat='DD MMM YYYY hh:mm A'
          placeholder='Choose Date & Time'
          mx='auto'
          onChange={handlePickerChange}
          clearable={true}
          rightSection={
            <button
              type='button'
              className='booking__date-picker__date-input__button'>
              <i className='bi bi-calendar-event'></i>
            </button>
          }
        />
        <div className='booking__input-wrapper'>
          <input
            name='persons'
            type='number'
            className='booking__input booking__input--number'
            placeholder='Persons'
            onChange={handleInputChange}
          />
          {errors.persons && (
            <span className='booking__input-wrapper__error'>
              {errors.persons}
            </span>
          )}
        </div>
      </div>

      <button type='submit' className='booking__submit'>
        SUBMIT
      </button>
    </form>
  );
};

export default Booking;
