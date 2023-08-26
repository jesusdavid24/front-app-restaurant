import CardsUsers from "../CardsUsers"

const dashboardAdmin = () => {
  return (
    <div className="container-fluid p-5">
      <div className="d-flex flex-column gap-5">
        <div className="px-1">
        <ul className="nav justify-content-start">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Clients</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Restaurant</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Administrators</a>
          </li>
        </ul>
        </div>
        <div className="d-flex flex-row align-items-start justify-content-between px-1">
          <div className="col-3">
            <CardsUsers />
          </div>
          <div className="col-3">
            <CardsUsers />
          </div>
          <div className="col-3">
            <CardsUsers />
          </div>
        </div>
        <div classNameName="px-5">
          <table className="table table-hover table-responsive px-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Name Users</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>Jesus Bravo</th>
                <th>Active</th>
                <th>
                  <button>Edit</button>
                </th>
                <th>
                  <button>Delete</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default dashboardAdmin
