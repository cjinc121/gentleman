import { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../utils/userReducer";
import {
  logInHandlerService,
  signUpHandlerService,
  signOutHandlerService,
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

const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    isLoggedIn: token ? true : false,
    tokenVal: token,
    userData: {},
    cart: [],
    wishlist: [],
  });
  const navigate = useNavigate();

  const logInHandler = async ({ email, password }) => {
    const res = await logInHandlerService(email, password);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      userDispatch({ type: "CREATE_SESSION", payload: res.data });

      navigate("/");
    }
  };

  const signUpHandler = async ({ first, last, email, password }) => {
    const data = await signUpHandlerService(first, last, email, password);
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", data.encodedToken);
    userDispatch({ type: "START_SESSION", payload: data });
    navigate("/");
  };

  const signOutHandler = () => {
    localStorage.removeItem("token");
    userDispatch({ type: "END_SESSION" });
    navigate("/login");
  };
  useEffect(() => {
    getAllWishlistHandler();
    getAllCartHandler();
  }, []);

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
