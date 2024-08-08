import { useEffect } from 'react';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user-context';

export const WishlistCard = ({ item }) => {
  const navigate = useNavigate();
  const [itemInCart, setItemInCart] = useState(false);
  const { deleteFromWishlistHandler, addToCartHandler, userState } = useUserContext();
  useEffect(() => {
    userState.cart.map((cartItem) => {
      if (cartItem._id === item._id) setItemInCart(true);
    });
  }, [item]);

  console.log(itemInCart, item._id, userState.cart);
  return (
    <div className="card-container-item">
      <div className="card-img" onClick={() => navigate(`/products/${item._id}`)}>
        <img src={item?.photoUrl} />
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
      {itemInCart ? (
        <button className="button outline-button secondary-button">
          <Link to="/cart">Go To Cart</Link>
        </button>
      ) : (
        <button
          className="button contained-button black-button"
          onClick={async () => {
            await addToCartHandler(item);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
