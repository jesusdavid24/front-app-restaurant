import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBooking,
  postBooking,
  postUserEmail,
  postRestaurantId,
  postDate,
  clearBooking,
} from '../../store/redux/slices/bookingSlice';
import { authLogin } from '../../store/redux/slices/loginSlice';
import { useForm } from '../../hooks/useForm';
import { DateTimePicker } from '@mantine/dates';
import { validateField } from '../../utils/validateField';
import { createOrder } from '../../api/orders';
import toast from '../../utils/toast/index';
import './index.scss';

const Booking = ({ restaurant }) => {
  const [errors, setErrors] = useState({
    booking_firstName: '',
    booking_lastName: '',
    booking_email: '',
    booking_phone: '',
    booking_persons: '',
  });

  const [bookingDate, setBookingDate] = useState(null);

  const dispatch = useDispatch();

  const booking = useSelector(selectBooking);

  const { email } = useSelector(authLogin);

  const token = localStorage.getItem('token');


  const { form, handleChange, resetForm } = useForm({
    booking_firstName: '',
    booking_lastName: '',
    booking_email: '',
    booking_phone: '',
    booking_persons: '',
  });

  useEffect(() => {
    dispatch(postUserEmail(email));

    dispatch(postRestaurantId(restaurant.id));
  }, []);

  useEffect(() => {
    dispatch(postBooking(form));
  }, [form]);

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

    setBookingDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (Object.values(errors).some((error) => typeof error === 'string')) {
        return toast.fire({
          icon: 'error',
          title: 'Invalid fields',
        });
      }

      const order = await createOrder(booking, token);

      if (typeof order === 'string') {
        throw new Error(order);
      }

      toast.fire({
        icon: 'success',
        title: 'Order created',
      });

      resetForm();

      setBookingDate(null);

      dispatch(clearBooking());
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
    }
  };

  return (
    <form className='booking' onSubmit={handleSubmit}>
      <div className='booking__user-name'>
        <div className='booking__input-wrapper'>
          <input
            name='booking_firstName'
            type='text'
            className='booking__input'
            placeholder='Firstname'
            value={form.booking_firstName}
            onChange={handleInputChange}
          />
          {errors.booking_firstName && (
            <span className='booking__input-wrapper__error'>
              {errors.booking_firstName}
            </span>
          )}
        </div>
        <div className='booking__input-wrapper'>
          <input
            name='booking_lastName'
            type='text'
            className='booking__input'
            placeholder='Lastname'
            value={form.booking_lastName}
            onChange={handleInputChange}
          />
          {errors.booking_lastName && (
            <span className='booking__input-wrapper__error'>
              {errors.booking_lastName}
            </span>
          )}
        </div>
      </div>

      <div className='booking__user-communication'>
        <div className='booking__input-wrapper'>
          <input
            name='booking_email'
            type='email'
            className='booking__input booking__input--email'
            placeholder='Email'
            value={form.booking_email}
            onChange={handleInputChange}
          />
          {errors.booking_email && (
            <span className='booking__input-wrapper__error'>
              {errors.booking_email}
            </span>
          )}
        </div>
        <div className='booking__input-wrapper'>
          <input
            name='booking_phone'
            type='number'
            className='booking__input booking__input--number'
            placeholder='Phone No:'
            value={form.booking_phone}
            onChange={handleInputChange}
          />
          {errors.booking_phone && (
            <span className='booking__input-wrapper__error'>
              {errors.booking_phone}
            </span>
          )}
        </div>
      </div>

      <div className='booking__date-picker'>
        <DateTimePicker
          className='booking__date-picker__date-input'
          value={bookingDate}
          valueFormat='DD MMM YYYY hh:mm A'
          minDate={new Date()}
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
            name='booking_persons'
            type='number'
            className='booking__input booking__input--number'
            placeholder='Persons'
            value={form.booking_persons}
            onChange={handleInputChange}
          />
          {errors.booking_persons && (
            <span className='booking__input-wrapper__error'>
              {errors.booking_persons}
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
