import React from "react";
import "./restaurantCard.scss";
import { restaurants } from "../../assets/data/restaurants";

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
         <div id={id} className="restaurant-container__card">
            <div
               className="card__image"
               style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card__content">
               <div className="rating-container">
                  <h1 className="card__title">{name}</h1>
                  <h2
                     className={
                        rating >= 3.5
                           ? "card__rating--recommended"
                           : "card__rating--inadmisable"
                     }>
                     {rating}&#9733;
                  </h2>
               </div>
               <div className="info-container">
                  <h2 className="card__info">- &nbsp; {type.join(", ")}</h2>
                  <h2 className="card__info">
                     - &nbsp; {open} - {close} (Mon - Sun)
                  </h2>
                  <h2 className="card__info">
                     - &nbsp; Cost ${cost} For {howMany}
                  </h2>
               </div>
            </div>
         </div>

         {/* <div className="restaurants-container__card">
            <div className="card__image" style={{ backgroundImage: `url(${cardImageUrl2})` }}></div>
            <div className="card__content">
               <div className="rating-container">
                  <h1 className="card__title">Italian Restro</h1>
                  <h2 className="card__rating">4.5&#9733;</h2>
               </div>
               <div className="info-container">
                  <h2 className="card__info"> - &nbsp; Fast Food, Cafe, Italian</h2>
                  <h2 className="card__info"> - &nbsp; 11.30am - 11.30pm (Mon - Sun)</h2>
                  <h2 className="card__info"> - &nbsp; cost $25 fot two</h2>
               </div>
            </div>
         </div>
         <div className="restaurants-container__card">
            <div className="card__image" style={{ backgroundImage: `url(${cardImageUrl3})` }}></div>
            <div className="card__content">
               <div className="rating-container">
                  <h1 className="card__title">Italian Restro</h1>
                  <h2 className="card__rating">4.5&#9733;</h2>
               </div>
               <div className="info-container">
                  <h2 className="card__info"> - &nbsp; Fast Food, Cafe, Italian</h2>
                  <h2 className="card__info"> - &nbsp; 11.30am - 11.30pm (Mon - Sun)</h2>
                  <h2 className="card__info"> - &nbsp; cost $25 fot two</h2>
               </div>
            </div>
         </div>
         <div className="restaurants-container__card">
            <div className="card__image" style={{ backgroundImage: `url(${cardImageUrl4})` }}></div>
            <div className="card__content">
               <div className="rating-container">
                  <h1 className="card__title">Italian Restro</h1>
                  <h2 className="card__rating">4.5&#9733;</h2>
               </div>
               <div className="info-container">
                  <h2 className="card__info"> - &nbsp; Fast Food, Cafe, Italian</h2>
                  <h2 className="card__info"> - &nbsp; 11.30am - 11.30pm (Mon - Sun)</h2>
                  <h2 className="card__info"> - &nbsp; cost $25 fot two</h2>
               </div>
            </div>
         </div> */}
      </>
   );
};

export default Restaurantcard;
