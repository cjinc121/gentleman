import "./homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../context/category-context";
import { useProductContext } from "../../context/product-context";
import { useUserContext } from "../../context/user-context";
import { FeaturedProductCard } from "../../components/productListing/featured-product-cart";
const Homepage = () => {
  const { category } = useCategoryContext();
  const { productState, productDispatch } = useProductContext();
  const { userState, userDispatch } = useUserContext();
  const { isUserLoggedIn } = userState;
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* banner */}
      <div className="banner-container">
        <div className="banner-hero">
          <img src="../../assets/sneaker-hero.png" alt="image-banner" />
          <div className="banner-text">
            <span> NEW SUMMER SNEAKERS COLLECTION</span>
            <span>
              <button
                className="button containedbutton black-button"
                onClick={() => {
                  productDispatch({ type: 'SET_CATEGORY', payload: 'empty' });
                  navigate('/products');
                }}
              >
                Explore Now
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* category */}
      <div className="heading">Categories</div>

      <div className="category-container">
        {category.map((item, index) => {
          return (
            <div
                key={index}
              className="category-card"
              onClick={() => {
                productDispatch({
                  type: 'SET_CATEGORY',
                  payload: item.categoryName,
                });
                navigate('/products');
              }}
            >
              <div className="top-image">
                <Link to="/products">
                  <img src={item.photoUrl} alt="category-image" />
                </Link>
              </div>
              <div className="bottom-name">{item.categoryName}</div>
            </div>
          );
        })}
      </div>
      {/* featured  */}
      <div className="heading">Featured Products</div>

      <div className="featured-container">
        {productState.product
          .filter((item) => item.featuredProduct)
          .map((item, index) => {
            let b = '';
            userState.wishlist.map((wishItem) => {
              if (wishItem.id === item.id) b = 'true';
            });
            return <FeaturedProductCard key={index} item={item} isInWishlist={b} />;
          })}
      </div>
    </div>
  );
};
export { Homepage };
