import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user-context";
import { addNewAddressHandler } from "../../utils/addressHandlers/addNewAddressHandler";
import { updateAddressHandler } from "../../utils/addressHandlers/updateAddressHandler";
import "./AddressModal.css";

const AddressModal = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });
  const {
    userState: { tokenVal, addressToEdit },
    userDispatch,
  } = useUserContext();

  const dummyAddress = {
    name: "Guest User",
    street: "76/1, College Road,Koramangla",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    zipCode: "711103",
    mobile: "9814235478",
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const checkInputs = () => {
    return (
      address.name &&
      address.street &&
      address.city &&
      address.state &&
      address.country &&
      address.zipCode &&
      address.mobile
    );
  };

  const callAddNewAddressHandler = () => {
    if (checkInputs()) {
      if (tokenVal) {
        if (addressToEdit) {
          updateAddressHandler(address, tokenVal, userDispatch);
          userDispatch({
            type: "ADDRESS_TO_EDIT",
            payload: null,
          });
        } else {
          addNewAddressHandler(address, userDispatch, tokenVal);
        }
        userDispatch({
          type: "TOGGLE_ADDRESS_MODAL",
          payload: false,
        });
      } else {
        navigate("/login");
      }
    } else {
    }
  };

  const checkEditAddress = () => {
    if (addressToEdit) {
      setAddress(addressToEdit);
    }
  };

  useEffect(() => checkEditAddress(), []);

  return (
    <>
      <section>
        <div
          className="modal-page"
          onClick={() =>
            userDispatch({
              type: "TOGGLE_ADDRESS_MODAL",
              payload: false,
            })
          }
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>{addressToEdit ? <>Edit Address</> : <>Add Address</>}</h2>

            <div className="address-form">
              <form>
                <input
                  type="text"
                  name="name"
                  value={address.name}
                  onChange={changeHandler}
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={changeHandler}
                  placeholder="Enter house no, street or colony"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={changeHandler}
                  placeholder="Enter City"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={changeHandler}
                  placeholder="Enter State"
                  required
                />
                <input
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={changeHandler}
                  placeholder="Enter Country"
                  required
                />
                <input
                  type="number"
                  name="zipCode"
                  value={address.zipCode}
                  onChange={changeHandler}
                  placeholder="Enter Zip Code"
                  required
                />
                <input
                  type="number"
                  name="mobile"
                  value={address.mobile}
                  onChange={changeHandler}
                  placeholder="Enter Mobile Number"
                  required
                />
              </form>
              <div className="action-btn">
                <button onClick={callAddNewAddressHandler}>Save</button>
                <button onClick={() => setAddress(dummyAddress)}>
                  Dummy Address
                </button>
                <button
                  onClick={() =>
                    userDispatch({
                      type: "TOGGLE_ADDRESS_MODAL",
                      payload: false,
                    })
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { AddressModal };
