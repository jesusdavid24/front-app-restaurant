import { useForm } from "../../hooks/useForm"
import { createUsers } from "../../api/login";

const FormUsers = ({roles}) => {

  const { form, handleChange } = useForm();
    const handleSubmit = async (event) => {
      event.preventDefault();
      return await createUsers(form);
    };

    console.log(form)

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">FirstName</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">LastName</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="age" className="form-label">age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="col-md-6">
        <label htmlFor="roleId" className="form-label">Roles</label>
          <select
            className="form-select"
            onChange={handleChange}
            name="roleId"
          >
            <option>Choose roles</option>
            {roles.map((role, index) => (
              <option key={index} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-10">
          <button type="submit" className="btn btn-primary w-25">Create Users</button>
        </div>
      </form>
    </div>
  )
}

export default FormUsers

