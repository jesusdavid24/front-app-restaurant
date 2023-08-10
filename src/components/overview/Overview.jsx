import React from "react";
import "./overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__col-1">
        <div className="overview__phone">Phone Number: 09876543210</div>
        <div className="overview__cuisine">
          <h6 className="overview__category">Cuisine</h6>
          <ul>
            <li>Fast Food</li>
            <li>Cafe</li>
            <li>Italian</li>
          </ul>
        </div>
        <div className="overview__opening">
          <h6 className="overview__category">Opening Hours</h6>
          <ul>
            <li>Monday To Friday: 11.00 A.M. To 11.00 P.M.</li>
            <li>Saturday To Sunday: 10.00 A.M. To 12.00 A.M.</li>
          </ul>
        </div>
        <div className="overview__address">
          <h6 className="overview__category">Address</h6>
          <ul>
            <li>9716 Riverside Dr, Mays Landing, NJ 08330</li>
            <li>24 Lafayette Drive, Ladson, SC 29456</li>
          </ul>
        </div>
      </div>
      <div className="overview__col-2">
        <div className="overview__facility">
          <h6 className="overview__category">Facility</h6>
          <ul>
            <li>Card Accepted</li>
            <li>Parking Avaliable</li>
            <li>Banquet Area</li>
            <li>Home Delivery</li>
            <li>Table Booking</li>
            <li>Avaliable For Events</li>
            <li>Game Zone</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
