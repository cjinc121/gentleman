import {BsHeartFill} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";
import {Link } from "react-router-dom";
import { useProductContext } from "../../context/product-context";
import { useUserContext } from "../../context/user-context";
const ProductListing=()=>{
  const {filterData}=useProductContext();
  const {userState,userDispatch}=useUserContext();
return <div className="product-content">
{
filterData.map((item)=>{
  let a = "";let b="";
        userState.cart.map((cartItem) => {
          if (cartItem.product.id === item.id) a = "true";
        });
        userState.wishlist.map((wishItem)=>{
          if(wishItem.id===item.id)b="true";
        });
  return  <div className="card-container-portrait">
    <div className="image-container"><img src={item.photoUrl} alt="card-image" />
    <div className="tag-image-left new-tag">New</div>
    <div class="tag-image-left rating-container-item rating-tag ">
{item.rating}<AiOutlineStar/>
</div>
    <div className="tag-image-right ">
{
  b?      <button className="floating-button"><BsHeartFill className="product-card-icon"/></button>
  :      <button className="floating-button"onClick={()=>userDispatch({type:"ADD_TO_WISHLIST",payload:item})}><BsHeartFill className="product-card-icon"/></button>
}
      </div>
      </div>
  <div className="card-title">
    <h2 className="main-title">{item.title}</h2>
    <p className="description">{item.description}</p>
  </div>
  <p className="card-price">Rs.{item.discountPrice} &nbsp;&nbsp;&nbsp;<s className="strikeoff">Rs.{item.originalPrice}</s></p>
  {
    a?<button className="button outline-button secondary-button"><Link to="/cart">Go To Cart</Link></button>:  <button className="button contained-button black-button" onClick={()=>userDispatch({type:"ADD_TO_CART",payload:item})}>Add to Cart</button>

  }
{
  b? <button className="button outline-button secondary-button"><Link to="/wishlist">Go to Wishlist</Link></button>: <button className="button outline-button secondary-button"onClick={()=>userDispatch({type:"ADD_TO_WISHLIST",payload:item})}>Add to Wishlist</button>
}
  </div>
})
}
</div>
}
export {ProductListing}