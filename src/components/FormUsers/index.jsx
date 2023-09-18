import { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm'
import toast from '../../utils/toast'
import Loader  from '../Loader'
import { useSelector, useDispatch } from 'react-redux';
import { updateUsers } from '../../api/users';
import { postUsers, selectPostUsers } from '../../store/redux/slices/usersSlice';
import './index.scss'

const FormUsers = ({roles, handleCloseForm, selectedUserId}) => {

  const dispatch = useDispatch();

  const { error, status } = useSelector(selectPostUsers)

  const users = useSelector((state) => state.users.users)

  const { form, handleChange, resetForm } = useForm();

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const [formData, setFormData] = useState({
    id: selectedUserId,
    firstName: selectedUser ? selectedUser.firstName: '',
    lastName: selectedUser ? selectedUser.lastName: '',
    address: selectedUser ? selectedUser.address: '',
    phone: selectedUser ?  selectedUser.phone: '',
    email: selectedUser ? selectedUser.email: '',
    password: '',
    age: selectedUser  ? selectedUser.age: '',
    role: selectedUser ? selectedUser.role: ''
  });


  useEffect(() => {
    if (selectedUserId) {
      setFormData({
        id: selectedUserId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        password: '',
        age: formData.age,
        role: formData.role
      });
    }
  }, [selectedUserId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(selectedUserId){
      console.log(form);
      await updateUsers(form);
      toast.fire({
        icon: "success",
        title: "User successfully update",
      });
    } else {
      dispatch(postUsers(form))
      toast.fire({
        icon: "success",
        title: "User successfully created",
      });
    }

    resetForm();
  };

  if(status === 'loading') return  <div><Loader />.</div>

  if(error) return <div>Error: {error}</div>

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
              { selectedUserId ? (
                <div className="custom__container__form__forms__container__button-1">
                  <button type="submit">Update</button>
                </div>
              ) : (
              <div className="custom__container__form__forms__container__button-1">
                <button type="submit">Create</button>
              </div>
            )}
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

