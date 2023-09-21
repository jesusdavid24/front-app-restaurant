import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader  from '../Loader';
import toast from '../../utils/toast';
import { deleteUser } from '../../store/redux/slices/usersSlice';
import { getUsers, selectUsers } from '../../store/redux/slices/usersSlice'
import './index.scss'

const TableUsers = ({ onEditUser, onDeleteUser }) => {

  const dispatch = useDispatch();

  const { users, error, status } = useSelector(selectUsers)

  useEffect(() => {
    localStorage.getItem('token')
    dispatch(getUsers())
  }, []);

  const hanldeDeleteUser = (id, index) => {
    onDeleteUser(id);
    dispatch(deleteUser({ index }))
    toast.fire({
      icon: "success",
      title: "User deleted!",
    });
  }

  if(status === 'loading') return  <div><Loader /></div>

  if(error) return <div>Error: {error}</div>

  const capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <div className="table__container">
      <div className="table__container__wrapper">
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
          {users.length > 0 && users.map((user, index) => (
            <tr key={user.email}>
              <td>{index + 1}</td>
              <td>{capitalizeText(`${user.firstName} ${user.lastName}`)}</td>
              <td>{capitalizeText(`${user.isActive}`)}</td>
              <td>{capitalizeText(`${user.role.name}`)}</td>
              <td>
                <button onClick={() => onEditUser(user.id)}>Edit</button>
                <button onClick={() => hanldeDeleteUser(user.id, index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default TableUsers
