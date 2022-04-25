import "./authentication.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user-context";
import { useState } from "react";
const SignUp = () => {
  const { signUpHandler } = useUserContext();
  const [signUser, setSignUser] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div className="authentication-card-container">
        <h3>Sign Up</h3>
        <input
          type="text"
          className="input"
          name="firstname"
          placeholder=" FIRST NAME"
          onChange={(e) => setSignUser({ ...signUser, first: e.target.value })}
        />
        <input
          type="text"
          className="input"
          name="lastname"
          placeholder=" LAST NAME"
          onChange={(e) => setSignUser({ ...signUser, last: e.target.value })}
        />
        <input
          type="email"
          className="input"
          name="username"
          placeholder="ENTER YOUR EMAIL"
          onChange={(e) => setSignUser({ ...signUser, email: e.target.value })}
        />
        <input
          type="password "
          className="input"
          name="password"
          placeholder="ENTER PASSWORD"
          onChange={(e) =>
            setSignUser({ ...signUser, password: e.target.value })
          }
        />
        <label>
          <input id="checkbox-2" name="checkbox" type="checkbox" />I accept
          Terms & Conditions
        </label>

        <div className="button-row-4">
          <button
            className="button contained-button primary-button "
            onClick={() => signUpHandler(signUser)}
          >
            Create New Account
          </button>
        </div>
        <Link to="/login">
          <u>Already have an account</u>
        </Link>
      </div>
    </div>
  );
};
export { SignUp };
