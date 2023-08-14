import React from "react";
import { reviews } from "../../assets/data/reviews";
import "./index.scss";

const Reviews = () => {
  return (
    <div className="restaurant-reviews">
      {reviews.map((review, index) => (
        <div key={index} className="restaurant-reviews__review">
          <div className="restaurant-reviews__review__rating">
            <span className="restaurant-reviews__review__star">
              {[1, 2, 3, 4, 5].map((item) =>
                item <= review.rating ? (
                  <img
                    key={item}
                    src="/src/assets/icons/star-fill.png"
                    style={{ width: "15px" }}
                  />
                ) : (
                  <img
                    key={item}
                    src="/src/assets/icons/star.png"
                    style={{ width: "15px" }}
                  />
                )
              )}
            </span>
            <h6>{review.title}</h6>
          </div>
          <h6 className="restaurant-reviews__review__author">
            By {review.user}, {review.date}
          </h6>
          <p className="restaurant-reviews__review__content">
            {review.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
