import "./Checkout.css";
import { useUserContext } from "../../context/user-context";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addNewOrderHandler } from "../../utils/ordersHandler/addNewOrderHandler";
// const { REACT_APP_RAZORPAY_API_KEY, REACT_APP_SECRET_KEY } = process.env;
import icon64 from "../../assets/G.webp";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  const { userState, userDispatch, deleteFromCartHandler } = useUserContext();
  const [selectedAddress, setSelectedAddress] = useState();
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
  const totalPrice = userState.cart.reduce((acc, curr) => {
    acc = acc + curr.discountPrice * curr.qty;
    return acc;
  }, 0);
  const totalDiscount = userState.cart.reduce((acc, curr) => {
    acc = acc + (curr.originalPrice - curr.discountPrice) * curr.qty;
    return acc;
  }, 0);
  const getOrderObj = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const newDate =
      weekday[today.getDay()] +
      " " +
      month[today.getMonth()] +
      " " +
      String(today.getDate()) +
      " " +
      String(today.getFullYear());
    const order = {
      orderedProducts: userState.cart,
      totalPrice: totalPrice.toFixed(2),
      itemsPrice: totalPrice + totalDiscount,
      discountedPrice: totalDiscount.toFixed(2),
      deliveryAddress: selectedAddress,
      date: newDate,
    };
    return order;
  };

  const proceedToPay = async () => {
    const response = await loadSdk();
    if (response) {
      const options = {
        key: "rzp_test_WdfsPnusxjGFgq",
        key_secret: "h1N2JLHfkAUSZwfXyfoo6MIX",
        amount: totalPrice.toFixed(2) * 100,
        currency: "INR",
        name: "GENTLEMAN",
        description: "Thank you for shopping with us",
        image: icon64,
        // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: userState.userData.firstName,
          email: userState.userData.email,
          contact: "9999999999",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#202528" },
        handler: function (response) {
          const order = getOrderObj();
          addNewOrderHandler(order, userDispatch, userState.tokenVal);
          userState.cart.map((item) => deleteFromCartHandler(item._id));
          navigate("/profile");
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        console.error("Something went wrong", response.error.code);
      });
    } else {
      console.error("Something went wrong");
    }
  };

  const loadSdk = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  return (
    <>
      <div className="page-heading">Checkout</div>

      <div className="checkout-container">
        <div className="order-checkout-box">
          {userState.addresses.length !== 0 ? (
            <div className="address-selection">
              {userState.addresses.map((item) => {
                return (
                  <div className="address" key={item._id}>
                    <input
                      checked={selectedAddress === item ? true : false}
                      id={item._id}
                      type="radio"
                      onChange={() => {
                        setSelectedAddress(item);
                      }}
                    ></input>
                    <label htmlFor={item._id} className="address-card">
                      <h3 className="name">{item.name}</h3>
                      <p className="address-line">{item.street}</p>
                      <p className="address-line">
                        {item.city}, {item.state}, {item.zipCode}
                      </p>
                      <p className="address-line">{item.country}</p>
                      <p className="mobile-no">Mobile: {item.mobile}</p>
                    </label>
                  </div>
                );
              })}
            </div>
          ) : null}
          <button className="new-address-btn" onClick={addNewAddress}>
            <AiOutlinePlus className="plus-icon" />
            <span> Add New Address</span>
          </button>
        </div>
        <div className="order-details">
          {/* <h3>Order Details</h3> */}
          <div className="order-product-list">
            <section>
              <div className="bill-card">
                <h2 className="bill-card-title">ORDER DETAILS</h2>
                <div className="items-container">
                  <div className="items">
                    <h3 className="card-div-title">PURCHASED ITEMS</h3>

                    <div className="items-price">
                      <p className="item-type">Item</p>
                      <p className="item-type-price">Price</p>
                    </div>
                    {userState.cart.map((item) => {
                      return (
                        <div className="items-price" key={item._id}>
                          <p className="item-type">
                            {item.title}
                            <span>
                              ({item.qty} x ₹ {item.discountPrice})
                            </span>
                          </p>
                          <p className="item-type-price">
                            ₹ {item.qty * item.discountPrice}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="items">
                    <h3 className="card-div-title">Billing</h3>
                    <div className="items-price">
                      <p className="item-type">Total MRP</p>
                      <p className="item-type-price">
                        ₹ {totalPrice + totalDiscount}
                      </p>
                    </div>
                    <div className="items-price">
                      <p className="item-type">Total Discount</p>
                      <p className="item-type-price">- ₹ {totalDiscount}</p>
                    </div>
                    <div className="items-price">
                      <p className="item-type">Delivery</p>
                      <p className="item-type-price">FREE</p>
                    </div>
                  </div>
                </div>
                <div className="items-price ">
                  <p className="item-type ">Total Amount</p>
                  <p className="item-type-price ">₹ {totalPrice}</p>
                </div>
                {selectedAddress ? (
                  <div className="items-container">
                    <div className="items">
                      <h3 className=" card-div-title">Delivery Address</h3>
                      <h3 className="address-title">{selectedAddress.name}</h3>
                      <p>
                        {selectedAddress.street}, {selectedAddress.city},{" "}
                        {selectedAddress.state}, {selectedAddress.country},{" "}
                        {selectedAddress.zipCode}
                      </p>
                      <p>Mobile: {selectedAddress.mobile}</p>
                    </div>
                  </div>
                ) : null}
                {selectedAddress ? (
                  <button onClick={proceedToPay}>PROCEED TO PAY</button>
                ) : (
                  <button>Select Delivery Address</button>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
