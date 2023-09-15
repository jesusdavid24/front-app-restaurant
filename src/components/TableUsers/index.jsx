import './index.scss'

const TableUsers = ({ users }) => {

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
          {users.map((user, index) => (
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
