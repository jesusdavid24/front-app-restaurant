import Google from '../shared/svg/Google';
import Twitter from '../shared/svg/Twitter';
import GitHub from '../shared/svg/Github';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { login } from '../../api/login';
import './index.scss';


const Login = () => {

  const navigate = useNavigate()

  const { form, handleChange } = useForm();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = await login(form);

    localStorage.setItem('token', data.token)
    localStorage.setItem('firstName', data.newUser.firstName)
    localStorage.setItem('lasttName', data.newUser.lastName)
    localStorage.setItem('email', data.newUser.email)

    const role = data.newUser.role.name

    if( role  === 'ADMIN') {
      navigate("/admin");
    };

    if( role === 'CLIENT') {
      navigate("/");
    };
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__form">
          <Link className="login__container__form__link" to="/">← Back to Home</Link>
          <p className="login__container__form__title">Welcome Back</p>
          <form onSubmit={handleSubmit}>
            <div className="login__container__form__input-group">
              <label htmlFor="email">UserName</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="login__container__form__input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <div className="login__container__form__forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
            </div>
            <button type="submit" className="login__container__form__sign">Sign in</button>
          </form>
          <div className="login__container__form__social-message">
            <div className="login__container__form__social-message__line"></div>
            <p>Login with social accounts</p>
            <div className="login__container__form__social-message__line"></div>
          </div>
          <div className="login__container__form__social-icons">
            <button aria-label="Log in with Google">
              <svg><Google /></svg>
            </button>
            <button aria-label="Log in with Twitter">
              <svg><Twitter /></svg>
            </button>
            <button aria-label="Log in with GitHub">
              <svg><GitHub /></svg>
            </button>
          </div>
          <p className="login__container__form__signup">Don&apos;t have an account?
            <Link rel="noopener noreferrer" href="#" to="/registration">
              Sign up
            </Link>
          </p>
        </div>
        <div className="login__container__img">
          <img src="img/login.jpg" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
