import "./navbar.css";
import {BsHeartFill,BsFillCartFill} from 'react-icons/bs';
import {RiLoginCircleFill} from "react-icons/ri";
const Navbar=()=>{
return <header class="navbar">
<div class="left-nav">
  <a class="p-1 fs-15" href="../../index.html">
    <span class="brand fs-15">
      <span class="brand-name"><s>GENTLE</s>MAN</span>
    </span>
  </a>
</div>
<div class="right-nav">
  <ul class="link">
    <li>
      <a href="/screens/wishlist/wishlist.html"
        ><div class="badge">
          <BsHeartFill className="nav-icon"/>
          <div class="badge-no-right">9</div>
        </div>
      </a>
    </li>
    <li>
      <a href="/screens/cart/cart.html"
        ><div class="badge">
         <BsFillCartFill className="nav-icon"/>
          <div class="badge-no-right">9</div>
        </div>
      </a>
    </li>
    <li>
      <a href="../authentication/login.html"
        ><RiLoginCircleFill className="nav-icon"/></a>
    </li>
  </ul>
</div>
</header>
}
export {Navbar};