import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeAddressHandler } from "../../utils/addressHandlers/removeAddressHandler";
import { getOrdersHandler } from "../../utils/ordersHandler/getOrdersHandler";
import { getAddressesHandler } from "../../utils/addressHandlers/getAddressesHandler";
import { useUserContext } from "../../context/user-context";
import { AiOutlinePlus } from "react-icons/ai";
import "./profile.css";
const Profile = () => {
  const navigate = useNavigate();
  const { userState, signOutHandler, userDispatch } = useUserContext();
  const { tokenVal } = userState;
  const [tab, setTab] = useState(
    userState.userProfileTab !== "" ? userState.userProfileTab : "profile"
  );
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const updateAddress = (address) => {
    userDispatch({
      type: "ADDRESS_TO_EDIT",
      payload: address,
    });
    userDispatch({
      type: "TOGGLE_ADDRESS_MODAL",
      payload: true,
    });
  };

  const addNewAddress = () => {
    userDispatch({
      type: "ADDRESS_TO_EDIT",
      payload: null,
    });
    userDispatch({
      type: "TOGGLE_ADDRESS_MODAL",
      payload: true,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    userDispatch({ type: "USER_PROFILE_TAB", payload: "" });
  }, []);
  useEffect(() => {
    getOrdersHandler(tokenVal, userDispatch);
    getAddressesHandler(tokenVal, userDispatch);
  }, []);

  return (
    <div className="user-wrapper">
      <div className="user-container">
        <div className="user-box">
          <div className="tabs">
            <h2
              className={tab === "profile" ? "tab-active" : ""}
              onClick={() => setTab("profile")}
            >
              Profile
            </h2>
            <h2
              className={tab === "addresses" ? "tab-active" : ""}
              onClick={() => setTab("addresses")}
            >
              Addresses
            </h2>
            <h2
              className={tab === "orders" ? "tab-active" : ""}
              onClick={() => setTab("orders")}
            >
              Orders
            </h2>
          </div>
          <div className="tab-details">
            {tab === "profile" && (
              <>
                <h4>
                  Name: {currentUser.firstName}&nbsp;&nbsp;
                  {currentUser.lastName}
                </h4>
                <h4>Email: {currentUser.email}</h4>
                <h4>
                  Cart Items : {userState.cart.length} Item
                  {userState.cart.length > 1 ? "(s)" : ""}
                </h4>
                <h4>
                  Wishlist Items : {userState.wishlist.length} Item
                  {userState.wishlist.length > 1 ? "(s)" : ""}
                </h4>
                <div className="btn">
                  <button onClick={() => signOutHandler()}>Logout</button>
                </div>
              </>
            )}
            {tab === "addresses" && (
              <>
                {userState.addresses ? (
                  <div className="address-list">
                    {userState.addresses.map((item) => (
                      <div className="address-card" key={item._id}>
                        <h3 className="name">{item.name}</h3>
                        <p className="address-line">{item.street}</p>
                        <p className="address-line">
                          {item.city}, {item.state}, {item.zipCode}
                        </p>
                        <p className="address-line">{item.country}</p>
                        <p className="mobile-no">Mobile: {item.mobile}</p>
                        <div className="address-action-btns">
                          <button onClick={() => updateAddress(item)}>
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              removeAddressHandler(
                                item._id,
                                tokenVal,
                                userDispatch
                              );
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="new-address-btn" onClick={addNewAddress}>
                      <AiOutlinePlus className="plus-icon" />

                      <span> Add New Address</span>
                    </button>
                  </div>
                ) : null}
              </>
            )}

            {tab === "orders" &&
              (userState.orders.length > 0 ? (
                <>
                  <div className="order-list">
                    {userState.orders.map((order) => {
                      return (
                        <div className="order-card" key={order._id}>
                          <h3>
                            <span>Order Confirmed</span>
                            {/* <button
                              onClick={() => cancelOrderHandler(order._id)}
                            >
                              Cancel Order
                            </button> */}
                          </h3>
                          <h4>{order.date}</h4>
                          <h4>Order Id: #{order._id}</h4>
                          <div className="order-product-list">
                            {order.orderedProducts.map((product) => {
                              return (
                                <div
                                  className="order-product-card"
                                  key={product._id}
                                >
                                  <img src={product.photoUrl} alt="product" />
                                  <div className="product-details">
                                    <div>{product.title}</div>
                                    <div>
                                      {product.qty} x ₹{product.discountPrice}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {order.deliveryAddress && (
                            <div className="order-address">
                              <h3>Order Address</h3>
                              <div
                                className="address-card"
                                key={order.deliveryAddress._id}
                              >
                                <div className="name">
                                  {order.deliveryAddress.name}
                                </div>
                                <div className="address-line">
                                  {order.deliveryAddress.street},{" "}
                                  {order.deliveryAddress.city},{" "}
                                  {order.deliveryAddress.state},{" "}
                                  {order.deliveryAddress.country},{" "}
                                  {order.deliveryAddress.zipCode}
                                </div>
                                <div className="mobile-no">
                                  <span>Mobile No:</span>{" "}
                                  {order.deliveryAddress.mobile}
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="order-amount">
                            <h3>Price Details</h3>
                            <div className="price-detail">
                              <span>Total Price:</span>
                              <span>₹ {order.itemsPrice}</span>
                            </div>
                            <div className="price-detail">
                              <span>Discount Price:</span>
                              <span>₹ {order.discountedPrice}</span>
                            </div>
                            <div className="price-detail">
                              <span>Order Price:</span>
                              <span>₹ {order.totalPrice}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <h2>No Orders To Display Yet.</h2>
              ))}
          </div>
        </div>
      </div>

      {/* <div className="login-form">
        <h4>
          Name: {currentUser.firstName} {currentUser.lastName}
        </h4>
        <p>Email: {currentUser.email}</p>
        <button onClick={() => signOutHandler()}>Sign Out</button>
      </div> */}
    </div>
  );
};
export { Profile };
