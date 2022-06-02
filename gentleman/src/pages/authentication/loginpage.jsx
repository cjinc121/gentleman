import "./authentication.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user-context";
import { useState } from "react";
const Login = () => {
  const { logInHandler } = useUserContext();
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });
  const guestUser = {
    email: "aman.cjinc@gmail.com",
    password: "123456789",
  };
  return (
    <div>
      <div className="authentication-card-container">
        <div className="login-form">
          <h3>Log In</h3>
          <input
            type="email"
            className="input"
            name="username"
            placeholder="ENTER YOUR EMAIL"
            onChange={(e) => setLogUser({ ...logUser, email: e.target.value })}
          />
          <input
            type="password "
            className="input"
            name="password"
            placeholder="ENTER PASSWORD"
            onChange={(e) =>
              setLogUser({ ...logUser, password: e.target.value })
            }
          />
          <div className="button-row-4">
            <button className="button " onClick={() => logInHandler(logUser)}>
              Log In
            </button>
            <button className="button" onClick={() => logInHandler(guestUser)}>
              Guest Login
            </button>
          </div>
          <Link to="/signup">
            <u>Create New Account</u>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { Login };
