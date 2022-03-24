import "./homepage.css";
import {Link} from "react-router-dom";
import { useCategoryContext } from "../../context/category-context";
import { useProductContext } from "../../context/product-context";
import { useUserContext } from "../../context/user-context";
const Homepage=()=>{
  const {category}=useCategoryContext();
  const {productState}=useProductContext();
 const {userState,userDispatch}=useUserContext();
  return <div> 
   {/* banner */}
   <div className="banner-container">
  <div className="left-image">
    <img src="../../assets/7.png" alt="left-image" />
    <img src="../../assets/10.png" alt="right-image" />
    <img src="../../assets/11.png" alt="right-image" />
  </div>
  <div className="middle-text">
    NEW SUMMER SNEAKERS COLLECTION
    <Link to="/products"
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
{/* category */}
<div className="heading">Categories</div>

<div className="category-container">
{
      category.map((item)=>{
        return <div className="category-card">
        <div className="top-image">
          <Link to="/products">
            <img src={item.photoUrl} alt="category-image" />
          </Link>
        </div>
        <div className="bottom-name">{item.categoryName}</div>
      </div>
      })
    }
</div>
{/* featured  */}
<div className="heading">Featured Products</div>

<div className="featured-container">
  {
    productState.product.filter((item)=>item.featuredProduct).map((item)=>{
     let b="";
      userState.wishlist.map((wishItem)=>{
        if(wishItem.id===item.id)b="true";
      });
      return <div className="card-container-vertical">
      <img src={item.photoUrl}/>
      <div className="card-vertical-title">
        <h2 className="main-title">{item.title}</h2>
        <p className="desc">{item.description}</p>
        <p className="card-price">${item.discountPrice}&nbsp;&nbsp; <s>${item.originalPrice}</s></p>
        <p className="discount">{Math.round((item.originalPrice-item.discountPrice)*100/item.originalPrice)}%OFF</p>
        {
  b? <button className="button outline-button secondary-button"><Link to="/wishlist">Go to Wishlist</Link></button>: <button className="button contained-button black-button" onClick={()=>userDispatch({type:"ADD_TO_WISHLIST",payload:item})}>Add to Wishlist</button>
}
      </div>
    </div>
    })
     
  }
 
</div>
</div>
}
export {Homepage};