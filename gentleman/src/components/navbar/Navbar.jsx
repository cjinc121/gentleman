import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BsHeartFill, BsFillCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { useUserContext } from "../../context/user-context";
const Navbar = () => {
  const { userState } = useUserContext();
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="left-nav" onClick={() => navigate("/")}>
        <Link className="p-1 fs-15" to="/">
          <span className="brand fs-15">
            <img src="../../assets/G.webp" className="brand-logo" />
            <span className="brand-name">
              <s>GENTLE</s>MAN
            </span>
          </span>
        </Link>
      </div>
      <div className="right-nav">
        <ul className="link">
          <li>
            <Link to="/wishlist">
              <div className="badge">
                <BsHeartFill className="nav-icon" />
                <div className="badge-no-right">
                  {userState.isUserLoggedIn ? userState.wishlist.length : "0"}
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="badge">
                <BsFillCartFill className="nav-icon" />
                <div className="badge-no-right">
                  {userState.isUserLoggedIn ? userState.cart.length : "0"}
                </div>
              </div>
            </Link>
          </li>
          <li className="navbar-username">
            {userState.isUserLoggedIn
              ? `Hi ${userState.userData.firstName}`
              : ""}
          </li>
          <li>
            {userState.isUserLoggedIn ? (
              <FaUserCircle
                className="nav-icon"
                onClick={() => navigate("/profile")}
              />
            ) : (
              <Link to="/login">
                <AiOutlineLogin className="nav-icon" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};
export { Navbar };
