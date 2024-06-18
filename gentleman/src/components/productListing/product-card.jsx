import { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user-context';

export const ProductCard = ({ item, isInCart, isInWishlist }) => {
  const [inCart, setInCart] = useState(isInCart);
  const [inWishlist, setInWishlist] = useState(isInWishlist);
  const {
    userState,
    addToWishlistHandler,
    addToCartHandler,
    getAllCartHandler,
    getAllWishlistHandler,
  } = useUserContext();
  const navigate = useNavigate();

  return (
    <div className="card-container-portrait">
      <div className="image-container">
        <img
          src={item.photoUrl}
          alt="card-image"
          onClick={() => navigate(`/products/${item._id}`)}
        />
        <div className="tag-image-left new-tag">New</div>
        <div class="tag-image-left rating-container-item rating-tag ">
          {item.rating}
          <AiOutlineStar />
        </div>
        <div className="tag-image-right ">
          {userState.isUserLoggedIn ? (
            inWishlist ? (
              <button className="floating-button">
                <Link to="/wishlist">
                  <BsHeartFill className="product-card-icon" />
                </Link>
              </button>
            ) : (
              <button
                className="floating-button"
                onClick={() => {
                  addToWishlistHandler(item).then(() => getAllWishlistHandler());
                  setInWishlist(true);
                }}
              >
                <AiOutlineHeart className="product-card-icon" />
              </button>
            )
          ) : (
            <button className="floating-button" onClick={() => navigate('/login')}>
              <AiOutlineHeart className="product-card-icon" />
            </button>
          )}
        </div>
      </div>
      <div className="card-title">
        <h2 className="main-title">{item.title}</h2>
        <p className="description">{item.description}</p>
      </div>
      <p className="card-price">
        ₹{item.discountPrice} &nbsp;&nbsp;&nbsp;
        <s className="strikeoff">₹{item.originalPrice}</s>
      </p>
      {userState.isUserLoggedIn ? (
        inCart ? (
          <button className="button outline-button secondary-button">
            <Link to="/cart">Go To Cart</Link>
          </button>
        ) : (
          <button
            className="button contained-button black-button"
            onClick={() => {
              addToCartHandler(item).then(() => getAllCartHandler());
              setInCart(true);
            }}
          >
            Add to Cart
          </button>
        )
      ) : (
        <button className="button contained-button black-button" onClick={() => navigate('/login')}>
          Add to Cart
        </button>
      )}
      {userState.isUserLoggedIn ? (
        inWishlist ? (
          <button className="button outline-button secondary-button">
            <Link to="/wishlist">Go to Wishlist</Link>
          </button>
        ) : (
          <button
            className="button outline-button secondary-button"
            onClick={() => {
              addToWishlistHandler(item).then(() => getAllWishlistHandler());
              setInWishlist(true);
            }}
          >
            Add to Wishlist
          </button>
        )
      ) : (
        <button
          className="button outline-button secondary-button"
          onClick={() => navigate('/login')}
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
};
