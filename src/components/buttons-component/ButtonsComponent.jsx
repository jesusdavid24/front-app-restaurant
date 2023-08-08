import React from 'react';
import "./ButtonsComponent.css"

const ButtonsComponent = ({ title }) => {

  return (
    <>
      {title === "Edit" ?
        <div className='container_b'>
          <a> <h3 className='title_button'>
            {title}
          </h3>
          </a>
        </div>
        :
        <div className='container_b_remove'>
          <a> <h3 className='title_b_remove'>
            {title}
          </h3>
          </a>
        </div>}
    </>
  );
};

export default ButtonsComponent;
