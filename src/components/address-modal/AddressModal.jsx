import React, { useState } from "react";
import styled from "styled-components";
import "./index.scss";

function AddressModal({ isOpen, onClose, onAddAddress }) {
  const [name, setName] = useState(" ");
  const [mobileNumber, setMobileNumber] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [city, setCity] = useState(" ");
  const [state, setState] = useState(" ");
  const [zip, setZip] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAddress = {
      name,
      mobileNumber,
      address,
      city,
      state,
      zip,
    };
    onAddAddress(newAddress);
    onClose();
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal_overlay">
      <Overlay className="Overlay">
        <div className="modal">
          <div>
            <h2>Add New Address</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Mobile Number: </label>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <label>Address: </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="modal_3">
              <label>City: </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label>State: </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <label>Zip: </label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="modal_buttons">
              <button type="button" onClick={onClose}>
                Close
              </button>
              <button type="submit">Add Address </button>
            </div>
          </form>
        </div>
      </Overlay>
    </div>
  );
}

export default AddressModal;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pading: 40px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
