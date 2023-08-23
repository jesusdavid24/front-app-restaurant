import Google from '../shared/svg/Google';
import Twitter from '../shared/svg/Twitter';
import GitHub from '../shared/svg/Github';
import { Link } from "react-router-dom";
import './index.scss';


const Login = () => {

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__form">
          <Link className="login__container__form__link" to="/">← Back to Home</Link>
          <p className="login__container__form__title">Welcome Back</p>
          <form>
            <div className="login__container__form__input-group">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="login__container__form__input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <div className="login__container__form__forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
            </div>
            <button className="login__container__form__sign">Sign in</button>
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
