import { useUserContext } from "../../context/user-context";
import { GiNotebook } from "react-icons/gi";
import "./wishlist.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { WishlistCard } from '../../components/productListing/wishlist-card';
const Wishlist = () => {
  const { userState, getAllWishlistHandler } = useUserContext();
  useEffect(() => {
    (async () => {
      await getAllWishlistHandler();
    })();
  }, []);
  return (
    <div>
      <div className="page-header">Wishlist({userState.wishlist.length})</div>

      <div className="wishlist-container">
        {userState.wishlist.length === 0 && (
          <div className="page-header">
            {' '}
            Empty
            <GiNotebook />
          </div>
        )}
        {userState.wishlist.map((item, index) => {
         
          return <WishlistCard item={item}  key={index} />;
        })}
      </div>
    </div>
  );
};
export { Wishlist };
