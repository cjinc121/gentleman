import "./navbar.css";
import {Link} from "react-router-dom";
import {BsHeartFill,BsFillCartFill} from 'react-icons/bs';
import {RiLoginCircleFill} from "react-icons/ri";
const Navbar=()=>{
return <header class="navbar">
<div class="left-nav">
  <Link class="p-1 fs-15" to="/">
    <span class="brand fs-15">
      <span class="brand-name"><s>GENTLE</s>MAN</span>
    </span>
  </Link>
</div>
<div class="right-nav">
  <ul class="link">
    <li>
      <Link to="/"
        ><div class="badge">
          <BsHeartFill className="nav-icon"/>
          <div class="badge-no-right">9</div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/"
        ><div class="badge">
         <BsFillCartFill className="nav-icon"/>
          <div class="badge-no-right">9</div>
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