import './index.scss'

const TableUsers = () => {
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
  )
}

export default TableUsers
