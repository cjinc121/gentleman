import "./authentication.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <div className="authentication-card-container">
        <h3>Log In</h3>
        <input
          type="email"
          className="input"
          name="username"
          placeholder="ENTER YOUR EMAIL"
        />
        <input
          type="password "
          className="input"
          name="password"
          placeholder="ENTER PASSWORD"
        />
        <div className="input-row-3">
          <label>
            <input id="checkbox-2" name="checkbox" type="checkbox" />
            Remember Me
          </label>
          <a href="#">
            <u>Forgot Your Password</u>
          </a>
        </div>
        <button className="button contained-button primary-button">
          <Link to="/product">Log In</Link>
        </button>
        <Link to="/signup">
          <u>Create New Account</u>
        </Link>
      </div>
    </div>
  );
};
export { LoginPage };
