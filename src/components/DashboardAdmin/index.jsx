import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import CardsUsers from '../CardsUsers';
import FormUsers from '../FormUsers';
import TableUsers from '../TableUsers';
import { useDispatch } from 'react-redux';
import { getRoles } from '../../api/roles';
import './index.scss';

const DashboardAdmin = () => {

  const dispatch = useDispatch();

  const [selectedUserId, setSelectedEditUserId] = useState();

  const { roles } = useLoaderData();

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleEditUser = (id) => {
    setSelectedEditUserId(id)
    setShowForm(true)
  };


  return (
    <div className='admin'>
      <div className='admin__container'>
        <div className="admin__container__link" >
        <Link to="/">← Back to Home</Link>
        </div>
        <div className='admin__container__card'>
          <div className='admin__container__card__item'>
            <CardsUsers />
          </div>
          <div className='admin__container__card__item'>
            <CardsUsers />
          </div>
          <div className='admin__container__card__item'>
            <CardsUsers />
          </div>
        </div>
        <div className='admin__container__form'>
          <div className='admin__container__form__button'>
            <button type='button' onClick={handleShowForm}>
              Create Users
            </button>
          </div>
          <div className='admin__container__form__forms'>
            {showForm && (
              <FormUsers
                roles={roles}
                handleCloseForm={handleCloseForm}
                selectedUserId={selectedUserId}
              />
            )}
          </div>
        </div>
        <div className='admin__container__table'>
          <TableUsers onEditUser={handleEditUser}  />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;

export const loaderDashboardAdmin = async () => {
  const data = await getRoles();
  return { roles: data };
};
