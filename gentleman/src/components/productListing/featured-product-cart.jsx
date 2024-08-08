import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user-context';

export const FeaturedProductCard = ({ item, isInWishlist }) => {
  const [isWishlist, setIsWishlist] = useState(isInWishlist);
  const { userState, userDispatch, addToWishlistHandler } = useUserContext();
  const navigate = useNavigate();
  const { isUserLoggedIn } = userState;
  return (
    <div className="card-container-vertical">
      <img src={item.photoUrl} />
      <div className="card-vertical-title">
        <h2 className="main-title">{item.title}</h2>
        <p className="desc">{item.description}</p>
        <p className="card-price">
          ₹{item.discountPrice}&nbsp;&nbsp; <s>₹{item.originalPrice}</s>
        </p>
        <p className="discount">
          {Math.round(((item.originalPrice - item.discountPrice) * 100) / item.originalPrice)}
          %OFF
        </p>
        {isWishlist ? (
          <button className="button outline-button secondary-button">
            <Link to="/wishlist">Go to Wishlist</Link>
          </button>
        ) : (
          <button
            className="button contained-button black-button"
            onClick={async () => {
              if (isUserLoggedIn) {
                await addToWishlistHandler(item);
                setIsWishlist(true);
              } else navigate('/login');
            }}
          >
            Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
};
