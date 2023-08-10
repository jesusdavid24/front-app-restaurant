import React from "react";
import { reviews } from "../../assets/data/reviews";
import "./reviews.scss";

const Reviews = () => {
  return (
    <div className="restaurant-reviews">
      {reviews.map((review) => (
        <div className="restaurant-reviews__review">
          <div className="restaurant-reviews__review__rating">
            <span>{`(U + 2605) * ${review.rating}`}</span>
            {review.user}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
