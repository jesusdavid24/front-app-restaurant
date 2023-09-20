import { Link, useNavigate} from "react-router-dom";
import toast from "../../utils/toast";
import Loader from "../Loader";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { postUsers, selectPostUsers } from "../../store/redux/slices/usersSlice";
import './index.scss';

const RegistrationComponent = ({ roles }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { error, status} = useSelector(selectPostUsers)

  const rol =  roles.filter((role) => role.name == 'CLIENT')
  const { id } = rol[0]

  const { form, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    age: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    roleId: id,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(form.firstName && form.lastName && form.age &&
      form.password && form.email && form.address &&
      form.phone) {
      dispatch(postUsers(form))
      toast.fire({
        icon: "success",
        title: "User successfully created",
      });

      navigate("/");
      resetForm();
    } else {
      return toast.fire({
        icon: "error",
        title: "You must complete all fields",
      });
    }
  }

  if(status === 'loading') return  <div><Loader />.</div>

  if(error) return <div>Error: {error}</div>



  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__container__img">
          <img src="/img/registration.jpg" alt="registration" />
        </div>
        <div className="registration__container__form">
          <form onSubmit={handleSubmit}>
            <Link className="registration__container__form__link" to="/">← Back to Home</Link>
            <p className="registration__container__form__title">
              Register
            </p>
            <p className="registration__container__form__message">
              Signup now and get full access to our app.
            </p>

            <div className="registration__container__form__flex">
              <label>
                <input
                  required=""
                  placeholder=""
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  className="registration__container__form__flex__input"
                />
                <span>Firstname</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  className="registration__container__form__flex__input"
                />
                <span>Lastname</span>
              </label>
            </div>

            <div className="registration__container__form__col">
              <label>
                <input
                  required=""
                  placeholder=""
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Password</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  name="age"
                  type="text"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Age</span>
              </label>

              <label>
                <input
                  required=""
                  name="address"
                  placeholder=""
                  type="text"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Address</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Phone</span>
              </label>
            </div>

            <div className="registration__container__form__button">
              <button type="submit">Submit</button>
            </div>
            <p className="registration__container__form__signin">
              Already have an acount?
              <Link href="#" to="/login">
                Signin
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent
