import { useForm } from "../../hooks/useForm"
import { createUsers } from "../../api/users";
import './index.scss'

const FormUsers = ({roles, handleCloseForm}) => {

  const { form, handleChange } = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = await createUsers(form);
    return dataForm;
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
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>
            <div className="custom__container__form__forms__container">
              <div className="custom__container__form__forms__container__button-1">
                <button type="submit">Create</button>
              </div>
              <div className="custom__container__form__forms__container__button-2">
                <button type="button" onClick={handleCloseForm}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default FormUsers

