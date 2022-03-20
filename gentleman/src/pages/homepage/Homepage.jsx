import "./homepage.css";
import axios from "axios";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
const Homepage=()=>{
  const [category,setCategory]=useState([]);
  const [featured,setFeatured]=useState([]);
  //api call
 useEffect(()=>{
(async ()=>{
  try{
    const categoryResponse=await axios.get('/api/categories');
    const productResponse=await axios.get('/api/products');
    setCategory(categoryResponse.data.categories);
    setFeatured( productResponse.data.products);
  }
  catch(err){
    console.log(err);
  }
})()
 },[])
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
    featured.filter((item)=>item.featuredProduct).map((item)=>{
      return <div className="card-container-vertical">
      <img src={item.photoUrl}/>
      <div className="card-vertical-title">
        <h2 className="main-title">{item.title}</h2>
        <p className="desc">{item.categoryName}</p>
        <p className="card-price">${item.discountPrice} <s>${item.originalPrice}</s></p>
        <p className="discount">{(item.originalPrice-item.discountPrice)*100/item.originalPrice}%</p>
        <Link to="/products"> <button className="button contained-button black-button">Buy Now</button></Link>
      </div>
    </div>
    })
     
  }
 
</div>
</div>
}
export {Homepage};