import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../context/product-context";
import { useUserContext } from "../../context/user-context";
import { BsCalendarX } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { MdFlashOff } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import { GrCheckboxSelected } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import "./SingleProduct.css";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { userState, addToWishlistHandler, addToCartHandler } =
    useUserContext();
  const [singleProduct, setSingleProduct] = useState({});
  const navigate = useNavigate();
  let a = "";
  let b = "";
  userState.cart.map((cartItem) => {
    if (cartItem._id === singleProduct._id) a = "true";
  });
  userState.wishlist.map((wishItem) => {
    if (wishItem._id === singleProduct._id) b = "true";
  });
  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get(`/api/products/${productId}`);
        setSingleProduct(productResponse.data.product);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="single-product-container">
      {singleProduct && (
        <>
          <div className="left-part-container">
            <div className="product-image">
              <img src={singleProduct.photoUrl} />
            </div>
          </div>
          <div className="right-part-container">
            <div className="single-product-title">
              <h2 className="">{singleProduct.title}</h2>
              <p className="description">{singleProduct.description}</p>
            </div>
            <div class=" rating-container-item rating-tag ">
              {singleProduct.rating}
              <AiOutlineStar />
            </div>
            <p className="card-price">
              ₹{singleProduct.discountPrice} &nbsp;&nbsp;&nbsp;
              <s className="strikeoff">₹{singleProduct.originalPrice}</s>
            </p>

            <hr />
            {singleProduct.inStock ? (
              <p>
                <BsCalendarCheck />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In Stock
              </p>
            ) : (
              <p>
                <BsCalendarX />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Not In Stock
              </p>
            )}
            {singleProduct.fastDelivery ? (
              <p>
                <IoFlash />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fast Delivery
              </p>
            ) : (
              <p>
                <MdFlashOff />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No Fast Delivery
              </p>
            )}
            <p>
              <GrCheckboxSelected />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gst Inclusive
            </p>
            <hr />

            {userState.isUserLoggedIn ? (
              a ? (
                <button className="button outline-button secondary-button">
                  <Link to="/cart">Go To Cart</Link>
                </button>
              ) : (
                <button
                  className="button contained-button black-button"
                  onClick={() => {
                    addToCartHandler(singleProduct);
                  }}
                >
                  Add to Cart
                </button>
              )
            ) : (
              <button
                className="button contained-button black-button"
                onClick={() => navigate("/login")}
              >
                Add to Cart
              </button>
            )}
            {userState.isUserLoggedIn ? (
              b ? (
                <button className="button outline-button secondary-button">
                  <Link to="/wishlist">Go to Wishlist</Link>
                </button>
              ) : (
                <button
                  className="button outline-button secondary-button"
                  onClick={() => addToWishlistHandler(singleProduct)}
                >
                  Add to Wishlist
                </button>
              )
            ) : (
              <button
                className="button outline-button secondary-button"
                onClick={() => navigate("/login")}
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
