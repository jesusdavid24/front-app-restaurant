import CardsUsers from "../CardsUsers"

const dashboardAdmin = () => {
  return (
    <div class="container pt-3">
      <div className="d-flex flex-column">
        <div class="d-flex flex-row align-items-start justify-content-between">
          <div class="col-3">
            <CardsUsers />
          </div>
          <div class="col-3">
            <CardsUsers />
          </div>
          <div class="col-3">
            <CardsUsers />
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          <table class="table table-hover table-responsive">
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
