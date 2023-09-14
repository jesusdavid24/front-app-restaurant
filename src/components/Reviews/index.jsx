import { useState, useEffect, useContext } from 'react';
import { RestaurantsContext } from '../../store/context/RestaurantsContext';
import { fetchReviewsByRestaurantId } from '../../api/reviews';
import dayjs from 'dayjs';
import './index.scss';

const Reviews = ({ restaurant }) => {
  const [reviewsWithUser, setReviewsWithUser] = useState([]);

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
  }, []);

  return (
    <div className='restaurant-reviews'>
      {reviewsWithUser.map((review) => (
        <div key={review.id} className='restaurant-reviews__review'>
          <div className='restaurant-reviews__review__rating'>
            <span className='restaurant-reviews__review__star'>
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
          <h6 className='restaurant-reviews__review__author'>
            By {review.user}. {''}
            {dayjs(review.createdAt).format('MMM D, YYYY')}
          </h6>
          <p className='restaurant-reviews__review__content'>
            {review.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
