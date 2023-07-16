import Google from '../shared/svg/Google.jsx'
import Twitter from '../shared/svg/Twitter.jsx';
import GitHub from '../shared/svg/Github.jsx';
import login from '../../assets/img/login.jpg'
import './login.scss';

const Login = () => {
    return(
        <div className="container">
            <div className="container-form">
                <div className="form-container">
                    <p className="title">Welcome Back</p>
                    <form className="form">
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter your email address"
                            required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password"
                            required
                            />
                            <div className="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button className="sign">Sign in</button>
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                        <p className="message">Login with social accounts</p>
                        <div className="line"></div>
                    </div>
                    <div className="social-icons">
                        <button aria-label="Log in with Google" className="icon">
                            <Google />
                        </button>
                        <button aria-label="Log in with Twitter" className="icon">
                            <Twitter />
                        </button>
                        <button aria-label="Log in with GitHub" className="icon">
                            <GitHub />
                        </button>
                    </div>
                    <p className="signup">Don't have an account?
                        <a rel="noopener noreferrer" href="#" className=""> Sign up</a>
                    </p>
                </div>
            </div>
            <div className="container-img">
                <div className="container-img__imagen">
                    <img src={login} alt="login" />
                </div>
            </div>
        </div>
    );
};

export default Login

