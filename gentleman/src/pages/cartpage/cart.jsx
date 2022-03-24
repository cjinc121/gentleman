import { useUserContext } from "../../context/user-context";
import "./cart.css";
import {AiFillMinusCircle,AiFillPlusCircle} from "react-icons/ai";
import {MdCancel} from "react-icons/md";
import {BsFillCartXFill} from "react-icons/bs";
const Cart=()=>{
  const {userState,userDispatch }=useUserContext();
  const totalQuantity=userState.cart.reduce((acc,curr)=>{
    acc=acc+curr.quantity;
    return acc;
  },0)
 const totalPrice=userState.cart.reduce((acc,curr)=>{
   acc=acc+curr.product.discountPrice*curr.quantity;
   return acc
 },0)
 const totalDiscount=userState.cart.reduce((acc,curr)=>{
   acc=acc+(curr.product.originalPrice-curr.product.discountPrice)*curr.quantity;
   return acc
 },0)
  return <div> 
    <div className="page-header">Your Cart({userState.cart.length})</div>
    {userState.cart.length===0&&<div className="page-header">Empty<BsFillCartXFill/></div>}
   {userState.cart.length!==0 &&<div><div className="cart-container">
    <div className="cart-container-card">
  {
    userState.cart.map((item)=>{
      let b="";
      userState.wishlist.map((wishItem)=>{
        if(wishItem.id===item.product.id)b="true";
      });
      return <div className="card-container-vertical">
      <img className="card-image" src={item.product.photoUrl} />
      <div className="card-vertical-title">
        <h2 className="title main-title">{item.product.title}</h2>
        <div className="tag-card-right cart-icon" onClick={()=>userDispatch({type:"REMOVE_FROM_CART",payload:item})}><MdCancel/></div>
        <div className="cart-minus-plus">
          <div className="button-container-item">
            <button className="floating-button" onClick={()=>userDispatch({type:"INCREASE_QUANTITY",payload:item.product.id})} >
            <AiFillPlusCircle className="cart-icon"/>   
         </button>
          </div>
          <p>{item.quantity}</p>
          <div className="button-container-item">
            <button className="floating-button "onClick={()=>userDispatch({type:"DECREASE_QUANTITY",payload:item.product.id})}>
            <AiFillMinusCircle className="cart-icon"/>
            </button>
          </div>
        </div>
        <p className="title card-price">
         Rs. {item.product.discountPrice} <s>Rs.{item.product.originalPrice}</s> <span className="discount">({Math.round((item.product.originalPrice-item.product.discountPrice)*100/item.product.originalPrice)}% Off)</span>
        </p>
        
   <button className="button outline-button secondary-button"onClick={()=>{userDispatch({type:"ADD_TO_WISHLIST",payload:item.product})
  userDispatch({type:"REMOVE_FROM_CART",payload:item})}}>Move to Wishlist</button>

      
      </div>
    </div>
    })
  }  
     </div>

     <div className="bill-cart">
      <div className="bill-cart-card">
        <div className="bill-cart-row bold-row">
          <h3>PRICE DETAILS</h3>
        </div>
        <div className="bill-cart-row">Price ({totalQuantity} items) <span>Rs.{totalPrice+totalDiscount}</span></div>
        <div className="bill-cart-row">Discount <span>-Rs.{totalDiscount}</span></div>
        <div className="bill-cart-row">Delivery Charges<span>Rs.0</span></div>
        <div className="bill-cart-row bold-row border-top">
          TOTAL AMOUNT <span>Rs.{totalPrice}</span>
        </div>
        <p>You will save Rs.{totalDiscount} on this order</p>
        <button className="button contained-button black-button">
          PLACE ORDER
        </button>
      </div>
    </div>
   </div>
    </div>
    }
  
  </div>
}
export {Cart};