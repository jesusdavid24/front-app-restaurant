import React from "react";
import "./restaurantCard.scss";

const Restaurantcard = ({
  id,
  image,
  name,
  rating,
  type,
  open,
  close,
  cost,
  howMany
}) => {
  return (
    <>
      <div id={id} className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${image})` }}>
          {rating >= 4.0 && (
            <div className="card__image__ribbon card__image__ribbon--red">
              <span>Recommended</span>
            </div>
          )}
        </div>
        <div className="card__content">
          <div className="card__content__rating">
            <h1 className="card__content__title">{name}</h1>
            <h2
              className={
                rating >= 3.5
                  ? "card__content__rating--recommended"
                  : "card__content__rating--inadmisable"
              }>
              {rating}&#9733;
            </h2>
          </div>
          <div className="card__info">
            <h2 className="card__info__rules">
              - &nbsp; {type.join(", ")}
            </h2>
            <h2 className="card__info__rules">
              - &nbsp; {open} - {close} (Mon - Sun)
            </h2>
            <h2 className="card__info__rules">
              - &nbsp; Cost ${cost} For {howMany}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurantcard;
