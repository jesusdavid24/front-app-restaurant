import React from 'react';
import ButtonsComponent from "../ButtonsComponents";
import "./index.scss";

const CardView = () => {


  return (
    <div className='container'>
      <div className='container_card'>
        <div className='container_info'>
          <div className='container_title'>
            <h6>Mark Jecno</h6>
            <span className='container_span'>Office</span>
          </div>
          <div>
            <p>549 Sulphur Springs Road</p>
            <p>Downer Grove, IL</p>
            <p>60515</p>
            <p>Mobile: +91 123-456-7890</p>
          </div>
        </div>
        <div className='container_button'>
          <ButtonsComponent title={"Edit"} />
          <ButtonsComponent title={"Remove"} />
        </div>
      </div>
      <div className='container_card'>
        <div className='container_info'>
          <div className='container_title'>
            <h6>Mark Jecno</h6>
            <span className='container_span'>Home</span>
          </div>
          <div>
            <p>549 Sulphur Springs Road</p>
            <p>Downer Grove, IL</p>
            <p>60515</p>
            <p>Mobile: +91 123-456-7890</p>
          </div>
        </div>
        <div className='container_button'>
          <ButtonsComponent title={"Edit"} />
          <ButtonsComponent title={"Remove"} />
        </div>
      </div>
    </div>
  );
};

export default CardView;
