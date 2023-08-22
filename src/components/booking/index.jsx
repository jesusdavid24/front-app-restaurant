import React from "react";
import { DateTimePicker } from "@mantine/dates";
import "./index.scss";

const Booking = () => {
  return (
    <form className="booking">
      <div className="booking__user-name">
        <input
          type="text"
          className="booking__input"
          placeholder="First name"
        />
        <input type="text" className="booking__input" placeholder="Last name" />
      </div>

      <div className="booking__user-communication">
        <input type="email" className="booking__input" placeholder="Email" />
        <input
          type="number"
          className="booking__input"
          placeholder="Phone No:"
        />
      </div>

      <div className="booking__date-picker">
        <DateTimePicker
          className="booking__date-picker__date-input"
          valueFormat="DD MMM YYYY hh:mm A"
          placeholder="Choose Date & Time"
          mx="auto"
          rightSection={
            <button
              type="button"
              className="booking__date-picker__date-input__button"
            >
              <i className="bi bi-calendar-event"></i>
            </button>
          }
        />

        <input type="number" className="booking__input" placeholder="Person" />
      </div>

      <button type="submit" className="booking__submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Booking;