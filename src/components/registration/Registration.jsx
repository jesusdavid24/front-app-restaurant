import registration from "../../assets/img/registration.jpg";
import './registration.scss';

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__container__img">
          <img src={registration} alt="registration" />
        </div>
        <div className="registration__container__form">
          <form>
            <p className="registration__container__form__title">Register </p>
            <p className="registration__container__form__message">Signup now and get full access to our app. </p>
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

            <label>
              <input
                required=""
                placeholder=""
                type="email"
                className="registration__container__form__input"
              />
              <span>Email</span>
            </label>

            <label>
              <input
                required=""
                placeholder=""
                type="password"
                className="registration__container__form__input"
              />
              <span>Password</span>
            </label>
            <label>
              <input
                required=""
                placeholder=""
                type="password"
                className="registration__container__form__input"
              />
              <span>Confirm password</span>
            </label>
            <button>Submit</button>
            <p className="registration__container__form__signin">Already have an acount ?
              <a href="#">Signin</a>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Registration
