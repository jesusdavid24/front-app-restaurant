import { Link } from "react-router-dom";
import registration from "../../assets/img/registration.jpg";
import './index.scss';

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__container__img">
          <img src={registration} alt="registration" />
        </div>
        <div className="registration__container__form">
          <form>
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
                  type="text"
                  className="registration__container__form__flex__input"
                />
                <span>Firstname</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
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
                  type="email"
                  className="registration__container__form__col__input"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="password"
                  className="registration__container__form__col__input"
                />
                <span>Password</span>
              </label>
              <label>
                <input
                  required=""
                  placeholder=""
                  type="password"
                  className="registration__container__form__col__input"
                />
                <span>Confirm password</span>
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

export default Registration
