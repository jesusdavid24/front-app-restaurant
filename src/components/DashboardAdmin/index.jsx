import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardsUsers from "../CardsUsers";
import FormUsers from "../FormUsers";
import { getRoles } from "../../api/roles";
import './index.scss'


const DashboardAdmin = () => {

  const { roles } = useLoaderData();

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true)
  }


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
            <button type="button" onClick={handleShowForm}>Crear usuarios</button>
          </div>
          <div className="admin__container__form__forms">
            {showForm && (<FormUsers roles={roles} />)}
          </div>
        </div>
        <div className="admin__container__table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name Users</th>
                <th>Status</th>
                <th>Type user</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jesus Bravo</td>
                <td>Active</td>
                <td>Admin</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin

export const loaderDashboardAdmin = async () => {
  const data = await getRoles();
  return { roles: data };
};


