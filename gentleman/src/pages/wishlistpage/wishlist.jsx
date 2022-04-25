import { useUserContext } from "../../context/user-context";
import { MdCancel } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./wishlist.css";
const Wishlist = () => {
  const { userState, deleteFromWishlistHandler, addToCartHandler } =
    useUserContext();
  return (
    <div>
      <div className="page-header">Wishlist({userState.wishlist.length})</div>

      <div className="wishlist-container">
        {userState.wishlist.length === 0 && (
          <div className="page-header">
            {" "}
            Empty
            <GiNotebook />
          </div>
        )}
        {userState.wishlist.map((item) => {
          let a = "";
          userState.cart.map((cartItem) => {
            if (cartItem.id === item.id) a = "true";
          });
          return (
            <div className="card-container-item">
              <div className="card-img">
                <img src={item.photoUrl} />
                <div
                  className="tag-image-right cart-icon"
                  onClick={() => deleteFromWishlistHandler(item._id)}
                >
                  <MdCancel />
                </div>
              </div>
              <div className="card-title">
                <h2 className="main-title">{item.title}</h2>
                <p className="description">{item.categoryName}</p>
                <h3 className="sub-title">{item.description}</h3>
              </div>
              {a ? (
                <button className="button outline-button secondary-button">
                  <Link to="/cart">Go To Cart</Link>
                </button>
              ) : (
                <button
                  className="button contained-button black-button"
                  onClick={() => addToCartHandler(item)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { Wishlist };
