import "./authentication.css";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <div className="authentication-card-container">
      <h3>Sign Up</h3>
      <input
        type="text"
        className="input"
        name="username"
        placeholder="ENTER YOUR NAME"
      />
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
      <input
        type="password "
        className="input"
        name="password"
        placeholder="CONFIRM PASSWORD"
      />
      <label>
        <input id="checkbox-2" name="checkbox" type="checkbox" />I accept Terms
        & Conditions
      </label>

      <button className="button contained-button primary-button">
        <Link to="/product">Create New Account</Link>
      </button>
      <Link to="/login">
        <u>Already have an account</u>
      </Link>
    </div>
  );
};
export { SignupPage };
