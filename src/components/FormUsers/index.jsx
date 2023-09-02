import { useForm } from "../../hooks/useForm"
import { createUsers } from "../../api/login";
import './index.scss'

const FormUsers = ({roles}) => {

  const { form, handleChange } = useForm();
    const handleSubmit = async (event) => {
      event.preventDefault();
      return await createUsers(form);
    };

  return (
    <div className="custom">
      <div className="custom__container">
        <div className="custom__container__form">
          <form className="custom__container__form__forms" onSubmit={handleSubmit}>
            <div className="custom__container__form__forms__field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="custom__container__form__forms__field">
            <label htmlFor="roleId">Roles</label>
              <select
                className="form-select"
                onChange={handleChange}
                name="roleId"
              >
                <option>Choose roles</option>
                {roles && roles.map((role) => (
                  <option value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>
            <div className="custom__container__form__forms__button">
              <button type="submit" className="btn btn-primary w-25">Create Users</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default FormUsers

