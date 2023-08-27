
const FormUsers = () => {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">FirstName</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">LastName</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlForfor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            autoComplete="off"
          />
        </div>
        <div className="d-flex flex-column col-md-6">
          <select sName="form-select p-5">
            <option selected>Choose Role</option>
            <option>Clients</option>
            <option>Restaurant</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default FormUsers

