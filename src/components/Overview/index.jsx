import { days } from '../../utils/days';
import './index.scss';

const Overview = ({ restaurant }) => {
  const {
    phone,
    cuisines,
    opening_first_day,
    opening_last_day,
    opening_hour,
    closing_hour,
    address,
    services,
  } = restaurant;

  return (
    <div className='overview'>
      <div className='overview__col-1'>
        <div className='overview__phone'>Phone Number: {phone}</div>
        <div className='overview__cuisine'>
          <h6 className='overview__category'>Cuisine</h6>
          <ul>
            {cuisines.map((cuisine, index) => (
              <li key={index} className='overview__category__item'>
                {cuisine}
              </li>
            ))}
          </ul>
        </div>
        <div className='overview__opening'>
          <h6 className='overview__category'>Opening Hours</h6>
          <ul>
            <li>
              {days[opening_first_day]} To {days[opening_last_day]}:{' '}
              {opening_hour}
              :00 P.M. To {closing_hour}:00 P.M.
            </li>
          </ul>
        </div>
        <div className='overview__address'>
          <h6 className='overview__category'>Address</h6>
          <ul>
            {address.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='overview__col-2'>
        <div className='overview__facility'>
          <h6 className='overview__category'>Facility</h6>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
