import { useState, useEffect } from 'react';
import { fetchReviews } from '../../api/reviews';
import { fetchUsers } from '../../api/users';
import { getReviewsWithUser } from '../../utils/reviewWithUser';
import dayjs from 'dayjs';
import './index.scss';

const Reviews = ({ restaurant }) => {
  const [reviewsWithUser, setReviewsWithUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchAll() {
      const [reviewsData, usersData] = await Promise.all([
        fetchReviews(),
        fetchUsers(),
      ]);

      const result = getReviewsWithUser(reviewsData, usersData);

      setReviewsWithUser(result);
    })();

    reviewsWithUser & setIsLoading(false);
  }, []);

  return (
    <div className='restaurant-reviews'>
      {isLoading ? (
        <div>Is Loading...</div>
      ) : (
        reviewsWithUser
          .filter((review) => review.restaurantId === restaurant.id)
          .map((review, index) => (
            <div key={index} className='restaurant-reviews__review'>
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
                By {review.user.firstName}. {''}
                {dayjs(review.createdAt).format('MMM D, YYYY')}
              </h6>
              <p className='restaurant-reviews__review__content'>
                {review.message}
              </p>
            </div>
          ))
      )}
    </div>
  );
};

export default Reviews;
