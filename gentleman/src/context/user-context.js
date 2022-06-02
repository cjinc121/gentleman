import { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../utils/userReducer";
import {
  logInHandlerService,
  signUpHandlerService,
} from "../services/userApicall";
import { useNavigate } from "react-router-dom";
import {
  addToCartService,
  addToWishlistService,
  decreaseQuantityCartService,
  deleteFromCartService,
  deleteFromWishlistService,
  getAllCartService,
  getAllWishlistService,
  increaseQuantityCartService,
} from "../services/productApicall";
const UserContext = createContext();
const useUserContext = () => useContext(UserContext);
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    isUserLoggedIn: token ? true : false,
    tokenVal: token,
    userData: user,
    cart: [],
    wishlist: [],
    addresses: [],
    orders: [],
    showAddressModal: false,
    addressToEdit: null,
    userProfileTab: "",
  });
  const navigate = useNavigate();

  const logInHandler = async ({ email, password }) => {
    const res = await logInHandlerService(email, password);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.data.foundUser));
      userDispatch({ type: "CREATE_SESSION", payload: res.data });
      navigate("/");
    }
  };

  const signUpHandler = async ({ first, last, email, password }) => {
    const data = await signUpHandlerService(first, last, email, password);
    localStorage.setItem("token", JSON.stringify(data.encodedToken));
    localStorage.setItem("user", JSON.stringify(data.createdUser));
    userDispatch({ type: "START_SESSION", payload: data });
    navigate("/");
  };

  const signOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    userDispatch({ type: "END_SESSION" });
    navigate("/login");
  };

  const getAllWishlistHandler = async () => {
    const { data, status } = await getAllWishlistService(userState);
    if (status === 200) {
      userDispatch({ type: "UPDATE_WISHLIST", payload: data.wishlist });
    }
  };
  const addToWishlistHandler = async (product) => {
    const { data, status } = await addToWishlistService(product, userState);
    if (status === 201) {
      userDispatch({
        type: "ADD_TO_WISHLIST",
        payload: data.wishlist[data.wishlist.length - 1],
      });
    }
  };

  const deleteFromWishlistHandler = async (_id) => {
    const { data, status } = await deleteFromWishlistService(_id, userState);
    if (status === 200) {
      userDispatch({
        type: "UPDATE_WISHLIST",
        payload: data.wishlist,
      });
    }
  };
  const getAllCartHandler = async () => {
    const { data, status } = await getAllCartService(userState);
    if (status === 200) {
      userDispatch({ type: "UPDATE_CART", payload: data.cart });
    }
  };
  const addToCartHandler = async (product) => {
    const { data, status } = await addToCartService(product, userState);
    if (status === 201) {
      userDispatch({
        type: "ADD_TO_CART",
        payload: data.cart[data.cart.length - 1],
      });
    }
  };
  const deleteFromCartHandler = async (_id) => {
    const { data, status } = await deleteFromCartService(_id, userState);
    if (status === 200) {
      userDispatch({
        type: "UPDATE_CART",
        payload: data.cart,
      });
    }
  };
  const increaseQuantityCartHandler = async (_id) => {
    const { data, status } = await increaseQuantityCartService(_id, userState);
    console.log(data.cart);
    if (status === 200) {
      userDispatch({
        type: "UPDATE_CART",
        payload: data.cart,
      });
    }
  };
  const decreaseQuantityCartHandler = async (_id) => {
    const { data, status } = await decreaseQuantityCartService(_id, userState);
    if (status === 200) {
      userDispatch({
        type: "UPDATE_CART",
        payload: data.cart,
      });
    }
  };
  useEffect(() => {
    getAllWishlistHandler();
    getAllCartHandler();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        logInHandler,
        signUpHandler,
        signOutHandler,
        addToWishlistHandler,
        deleteFromWishlistHandler,
        getAllWishlistHandler,
        getAllCartHandler,
        addToCartHandler,
        deleteFromCartHandler,
        increaseQuantityCartHandler,
        decreaseQuantityCartHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider, useUserContext };
