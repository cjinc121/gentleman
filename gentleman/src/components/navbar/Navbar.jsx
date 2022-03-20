import "./navbar.css";
import {Link} from "react-router-dom";
import {BsHeartFill,BsFillCartFill} from 'react-icons/bs';
import {RiLoginCircleFill} from "react-icons/ri";
const Navbar=()=>{
return <header className="navbar">
<div className="left-nav">
  <Link className="p-1 fs-15" to="/">
    <span className="brand fs-15">
      <span className="brand-name"><s>GENTLE</s>MAN</span>
    </span>
  </Link>
</div>
<div className="right-nav">
  <ul className="link">
    <li>
      <Link to="/"
        ><div className="badge">
          <BsHeartFill className="nav-icon"/>
          <div className="badge-no-right">9</div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/"
        ><div className="badge">
         <BsFillCartFill className="nav-icon"/>
          <div className="badge-no-right">9</div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/"
        ><RiLoginCircleFill className="nav-icon"/></Link>
    </li>
  </ul>
</div>
</header>
}
export {Navbar};