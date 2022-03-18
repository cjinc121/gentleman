import "./homepage.css";
import {Link} from "react-router-dom";
const Homepage=()=>{
  return <div> <div className="banner-container">
  <div className="left-image">
    <img src="../../assets/7.png" alt="left-image" />
    <img src="../../assets/10.png" alt="right-image" />
    <img src="../../assets/11.png" alt="right-image" />
  </div>
  <div className="middle-text">
    NEW SUMMER SNEAKERS COLLECTION
    <Link to="/"
      ><button className="button containedbutton black-button">
        Explore Now
      </button></Link
    >
  </div>
  <div className="right-image">
    <img src="../../assets/10.png" alt="right-image" />
    <img src="../../assets/11.png" alt="right-image" />
    <img src="../../assets/12.png" alt="right-image" />
  </div>
</div>
<div className="heading">Categories</div>
<div className="category-container">
  <div className="category-card">
    <div className="top-image">
      <Link to="/products">
        <img src="../../assets/boots.jpg" alt="category-image" />
      </Link>
    </div>
    <div className="bottom-name">BOOTS</div>
  </div>
  <div className="category-card">
    <div className="top-image">
    <Link to="/products">
        <img src="../../assets/sports.jpg" alt="category-image" />
      </Link>
    </div>
    <div className="bottom-name">SPORTS</div>
  </div>
  <div className="category-card bottom-column">
    <div className="top-image">
    <Link to="/products">
        <img src="../../assets/office.jpg" alt="category-image" />
      </Link>
    </div>
    <div className="bottom-name">OFFICE</div>
  </div>
  <div className="category-card bottom-column">
    <div className="top-image">
     <Link to="/products">
        <img src="../../assets/sneaker.jpg" alt="category-image" />
      </Link>
    </div>
    <div className="bottom-name">SNEAKER</div>
  </div>
  <div className="category-card bottom-column">
    <div className="top-image">
    <Link to="/products">
        <img src="../../assets/sandals.jpg" alt="category-image" />
      </Link>
    </div>
    <div className="bottom-name">SANDAL</div>
  </div>
</div>
<div className="heading">Featured Products</div>
<div className="featured-container">
  <div className="card-container-vertical">
    <img src="../../assets/left_image.jpg" />
    <div className="card-vertical-title">
      <h2 className="main-title">Card title</h2>
      <p className="desc">description</p>
      <p className="card-price">$1234 <s>$9999</s></p>
      <p className="discount">(87% off)</p>
      <Link to="/products"> <button className="button contained-button black-button">Buy Now</button></Link>
    </div>
  </div>
  <div className="card-container-vertical">
    <img src="../../assets/featured-1.jpg" />
    <div className="card-vertical-title">
      <h2 className="main-title">My Card Title</h2>
      <p className="desc">description</p>
      <p className="card-price">$1234 <s>$9999</s></p>
      <p className="discount">(87% off)</p>
      <Link to="/products"> <button className="button contained-button black-button">Buy Now</button></Link>
    </div>
  </div>

  <div className="card-container-vertical">
    <img src="../../assets/featured-2.jpg" />
    <div className="card-vertical-title">
      <h2 className="main-title">My Card Title</h2>
      <p className="desc">description</p>
      <p className="card-price">$1234 <s>$9999</s></p>
      <p className="discount">(87% off)</p>
      <Link to="/products"> <button className="button contained-button black-button">Buy Now</button></Link>
    </div>
  </div>
  <div className="card-container-vertical">
    <img src="../../assets/boots.jpg" />
    <div className="card-vertical-title">
      <h2 className="main-title">My Card Title</h2>
      <p className="desc">description</p>
      <p className="card-price">$1234 <s>$9999</s></p>
      <p className="discount">(87% off)</p>
     <Link to="/products"> <button className="button contained-button black-button">Buy Now</button></Link>
    </div>
  </div>
</div></div>
}
export {Homepage};