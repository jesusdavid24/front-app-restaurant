import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardsUsers from "../CardsUsers";
import FormUsers from "../FormUsers";
import TableUsers from "../TableUsers";
import { fetchUsers } from "../../api/users";
import { getRoles } from "../../api/roles";
import './index.scss'

const DashboardAdmin = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((user) => {
      setUsers(user);
    })
    .catch(error => {
      console.log('ERO¿RORRRRRRR',error)
    });
  }, []);

  const { roles } = useLoaderData();

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };


  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__container__card">
          <div className="admin__container__card__item">
            <CardsUsers />
          </div>
          <div className="admin__container__card__item">
            <CardsUsers />
          </div>
          <div className="admin__container__card__item">
            <CardsUsers />
          </div>
        </div>
        <div className="admin__container__form">
          <div className="admin__container__form__button">
            <button type="button" onClick={handleShowForm}>Create Users</button>
          </div>
          <div className="admin__container__form__forms">
            {showForm && (<FormUsers roles={roles} handleCloseForm={handleCloseForm} />)}
          </div>
        </div>
        <div className="admin__container__table">
          <TableUsers users={users} />
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin;

export const loaderDashboardAdmin = async () => {
  const data = await getRoles();
  return { roles: data };
};


