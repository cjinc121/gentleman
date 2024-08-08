
import { useProductContext } from "../../context/product-context";
import { useUserContext } from "../../context/user-context";
import { ProductCard } from './product-card';
const ProductListing = () => {
  const { filterData } = useProductContext();
  const { userState } = useUserContext();
  return (
    <div className="product-content">
      {filterData.map((item) => {
        let a = false;
        let b = false;
        userState.cart.map((cartItem) => {
          if (cartItem.id === item.id) a = true;
          return true;
        });
        userState.wishlist.map((wishItem) => {
          if (wishItem.id === item.id) b = true;
        });
        return <ProductCard item={item} isInCart={a} isInWishlist={b} />;
      })}
    </div>
  );
};
export { ProductListing };
