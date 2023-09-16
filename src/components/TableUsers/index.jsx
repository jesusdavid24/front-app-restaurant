import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, selectedUsers } from '../../store/redux/slices/usersSlice'
import './index.scss'

const TableUsers = () => {

  const dispatch = useDispatch();
  const { users, error, status } = useSelector(selectedUsers)
  console.log(status)

  useEffect(() => {
    dispatch(getUsers())
  }, []);

   if(status === 'loading') return  <div>Loading...</div>

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
                <button>Edit</button>
                <button>Delete</button>
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
