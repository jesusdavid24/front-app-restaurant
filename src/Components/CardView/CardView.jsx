import React from 'react';
import "./CardView.scss";
import ButtonsComponent from '../ButtonsComponent/ButtonsComponent';

const CardView = () => {


  return (
    <div className='container'>
      <div className='container_info'>
        <h6>Mark Jecno</h6>
        <p>549 Sulphur Springs Road</p>
        <p>Downer Grove, IL</p>
        <p>60515</p>
        <p>Mobile: +91 123-456-7890</p>
      </div>
      <div className='container_button'>
        <ButtonsComponent title={"Edit"} />
        <ButtonsComponent title={"Remove"} />
      </div>
    </div>
  );
};

export default CardView;