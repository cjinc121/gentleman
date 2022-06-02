import { useUserContext } from "../../context/user-context";
import "./cart.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BsFillCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const {
    userState,
    addToWishlistHandler,
    deleteFromCartHandler,
    increaseQuantityCartHandler,
    decreaseQuantityCartHandler,
  } = useUserContext();
  const totalQuantity = userState.cart.reduce((acc, curr) => {
    acc = acc + curr.qty;
    return acc;
  }, 0);
  const totalPrice = userState.cart.reduce((acc, curr) => {
    acc = acc + curr.discountPrice * curr.qty;
    return acc;
  }, 0);
  const totalDiscount = userState.cart.reduce((acc, curr) => {
    acc = acc + (curr.originalPrice - curr.discountPrice) * curr.qty;
    return acc;
  }, 0);
  return (
    <div>
      <div className="page-header">Your Cart({userState.cart.length})</div>
      {userState.cart.length === 0 && (
        <div className="page-header">
          Empty
          <BsFillCartXFill />
        </div>
      )}
      {userState.cart.length !== 0 && (
        <div>
          <div className="cart-container">
            <div className="cart-container-card">
              {userState.cart.map((item) => {
                let b = "";
                userState.wishlist.map((wishItem) => {
                  if (wishItem.id === item.id) b = "true";
                });
                return (
                  <div className="card-container-vertical">
                    <img
                      className="card-image"
                      src={item.photoUrl}
                      onClick={() => navigate(`/products/${item._id}`)}
                    />
                    <div className="card-vertical-title">
                      <h2 className="title main-title">{item.title}</h2>
                      <div
                        className="tag-card-right cart-icon"
                        onClick={() => {
                          deleteFromCartHandler(item._id);
                        }}
                      >
                        <MdCancel />
                      </div>
                      <div className="cart-minus-plus">
                        <div className="button-container-item">
                          <button
                            className="floating-button"
                            onClick={() => {
                              increaseQuantityCartHandler(item._id);
                            }}
                          >
                            <AiFillPlusCircle className="cart-icon" />
                          </button>
                        </div>
                        <p>{item.qty}</p>
                        <div className="button-container-item">
                          <button
                            className="floating-button "
                            onClick={() => {
                              if (item.qty > 1)
                                decreaseQuantityCartHandler(item._id);
                            }}
                          >
                            <AiFillMinusCircle className="cart-icon" />
                          </button>
                        </div>
                      </div>
                      <p className="title card-price">
                        ₹ {item.discountPrice} <s>₹{item.originalPrice}</s>{" "}
                        <span className="discount">
                          (
                          {Math.round(
                            ((item.originalPrice - item.discountPrice) * 100) /
                              item.originalPrice
                          )}
                          % Off)
                        </span>
                      </p>
                      {b ? (
                        <button
                          className="button outline-button secondary-button"
                          onClick={() => {
                            deleteFromCartHandler(item._id);
                          }}
                        >
                          Move to Wishlist
                        </button>
                      ) : (
                        <button
                          className="button outline-button secondary-button"
                          onClick={() => {
                            addToWishlistHandler(item);
                            deleteFromCartHandler(item._id);
                          }}
                        >
                          Move to Wishlist
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bill-cart">
              <div className="bill-cart-card">
                <div className="bill-cart-row bold-row">
                  <h3>PRICE DETAILS</h3>
                </div>
                <div className="bill-cart-row">
                  Price ({totalQuantity} items){" "}
                  <span>₹{totalPrice + totalDiscount}</span>
                </div>
                <div className="bill-cart-row">
                  Discount <span>-₹{totalDiscount}</span>
                </div>
                <div className="bill-cart-row">
                  Delivery Charges<span>₹.0</span>
                </div>
                <div className="bill-cart-row bold-row border-top">
                  TOTAL AMOUNT <span>₹{totalPrice}</span>
                </div>
                <p>You will save ₹{totalDiscount} on this order</p>
                <button
                  className="button contained-button black-button"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export { Cart };
