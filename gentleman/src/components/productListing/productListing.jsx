import {BsHeartFill} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";

import { useProductContext } from "../../context/product-context";
const ProductListing=()=>{
  const {filterData}=useProductContext();
return <div className="product-content">
{
filterData.map((item)=>{
  return  <div className="card-container-portrait">
    <div className="image-container"><img src={item.photoUrl} alt="card-image" />
    <div className="tag-image-left new-tag">New</div>
    <div class="tag-image-left rating-container-item rating-tag ">
{item.rating}<AiOutlineStar/>
</div>
    <div className="tag-image-right ">
      <button className="floating-button"><BsHeartFill className="product-card-icon"/></button>
      </div>
      </div>
  <div className="card-title">
    <h2 className="main-title">{item.title}</h2>
    <p className="description">{item.description}</p>
  </div>
  <p className="card-price">Rs.{item.discountPrice} &nbsp;&nbsp;&nbsp;<s className="strikeoff">Rs.{item.originalPrice}</s></p>
  <button className="button contained-button black-button">Add to Cart</button>
  <button className="button outline-button secondary-button">Add to Wishlist</button>
      </div>
})
}
</div>
}
export {ProductListing}