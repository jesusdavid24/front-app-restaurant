import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RestaurantsContext } from '../../store/context/RestaurantsContext';
import { authLogin } from '../../store/redux/slices/loginSlice';
import { fetchReviewsByRestaurantId } from '../../api/reviews';
import { useForm } from '../../hooks/useForm';
import { createReview } from '../../api/reviews';
import toast from '../../utils/toast';
import dayjs from 'dayjs';
import './index.scss';

const Reviews = ({ restaurant }) => {
  const [rating, setRating] = useState(0);

  const [reviewsWithUser, setReviewsWithUser] = useState([]);

  const { token, email } = useSelector(authLogin);

  const { form, handleChange, resetForm } = useForm({
    rating: 0,
    title: '',
    message: '',
    restaurantId: restaurant.id,
    userEmail: email,
  });

  const { handleError } = useContext(RestaurantsContext);

  useEffect(() => {
    (async function fetchAll() {
      try {
        const reviewsData = await fetchReviewsByRestaurantId(restaurant.id);

        if (typeof reviewsData === 'string') {
          throw new Error(reviewsData);
        }

        setReviewsWithUser(reviewsData);
      } catch (error) {
        handleError(error.message);
      }
    })();
  }, [rating]);

  const handleRatingSelection = (e) => {
    const { id: ratingid } = e.target;
    const id = parseInt(ratingid);
    setRating(id);
    handleChange(e);
  };

  const handleInputChange = (e) => {
    handleChange(e);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const actualUserReview = reviewsWithUser.filter(
        (review) => review.userEmail === email
      );

      if (actualUserReview.length) {
        throw new Error('One review per user');
      }

      if (rating === 0) {
        throw new Error('Leave a rating');
      }

      const review = await createReview(form, token);

      if (typeof review === 'string') {
        throw new Error(review);
      }

      toast.fire({
        icon: 'success',
        title: 'Review created',
      });

      resetForm();

      setRating(0);
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
    }
  };

  return (
    <div className='reviews'>
      <div className='reviews__restaurant-reviews'>
        {reviewsWithUser.map((review) => (
          <div key={review.id} className='reviews__restaurant-reviews__review'>
            <div className='reviews__restaurant-reviews__review__rating'>
              <span className='reviews__restaurant-reviews__review__star'>
                {[1, 2, 3, 4, 5].map((item) =>
                  item <= review.rating ? (
                    <img
                      key={item}
                      src='/icons/star-fill.png'
                      style={{ width: '15px' }}
                    />
                  ) : (
                    <img
                      key={item}
                      src='/icons/star.png'
                      style={{ width: '15px' }}
                    />
                  )
                )}
              </span>
              <h6>{review.title}</h6>
            </div>
            <h6 className='reviews__restaurant-reviews__review__author'>
              By {review.user}. {''}
              {dayjs(review.createdAt).format('MMM D, YYYY')}
            </h6>
            <p className='reviews__restaurant-reviews__review__content'>
              {review.message}
            </p>
          </div>
        ))}
      </div>

      <form className='reviews__create' onSubmit={handleSubmit}>
        <div className='reviews__rating'>
          <h4>How would you rate the service?</h4>

          <div className='reviews__create__star-box'>
            {[1, 2, 3, 4, 5].map((item) => (
              <img
                key={item}
                id={item}
                value={item}
                name='rating'
                src={
                  rating >= item ? '/icons/star-fill.png' : '/icons/star.png'
                }
                className='reviews__create__star-box__star'
                onClick={handleRatingSelection}
              />
            ))}
          </div>
        </div>

        <div className='reviews__create__input-box'>
          <label htmlFor='title' className='reviews__create__input-box__label'>
            Title
          </label>
          <input
            name='title'
            id='title'
            type='text'
            className='reviews__create__input-box__input'
            placeholder='Title'
            onChange={handleInputChange}
          />
        </div>
        <div className='reviews__create__input-box'>
          <label
            htmlFor='message'
            className='reviews__create__input-box__label'>
            Comment
          </label>
          <textarea
            name='message'
            id='message'
            className='reviews__create__input-box__input reviews__create__input-box__input--textarea'
            placeholder='Leave a comment...'
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='reviews__create__submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
