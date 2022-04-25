const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return { ...state, cart: [...action.payload] };
    case "UPDATE_WISHLIST":
      return { ...state, wishlist: [...action.payload] };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "ADD_TO_WISHLIST":
      if (
        state.wishlist.find((item) => item.id === action.payload.id) ===
        undefined
      )
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      else return { ...state };
    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cart: [...action.payload],
    //     // state.cart.filter( (item) => item.product.id !== action.payload.product.id),
    //   };
    // case "REMOVE_FROM_WISHLIST":
    //   return {
    //     ...state,
    //     wishlist: [...action.payload],
    //     // state.wishlist.filter((item) => item.id != action.payload.id)
    //   };

    // case "INCREASE_QUANTITY":
    //   return {
    //     ...state,
    //     cart: [...action.payload],
    //     // cart: state.cart.map((item) => {
    //     //   return item.product.id === action.payload
    //     //     ? { ...item, quantity: item.quantity + 1 }
    //     //     : item;
    //     // }),
    //   };
    // case "DECREASE_QUANTITY":
    //   return {
    //     ...state,
    //     cart: [...action.payload],
    //     // cart: state.cart.map((item) => {
    //     //   return item.product.id === action.payload && item.quantity > 1
    //     //     ? { ...item, quantity: item.quantity - 1 }
    //     //     : item;
    //     // }),
    //   };
    case "CREATE_SESSION":
      return {
        ...state,
        tokenVal: action.payload.encodedToken,
        isUserLoggedIn: true,
        cart: action.payload.foundUser.cart,
        wishlist: action.payload.foundUser.wishlist,
        userData: action.payload.foundUser,
      };
    case "START_SESSION":
      return {
        ...state,
        tokenVal: JSON.stringify(action.payload.encodedToken),
        isUserLoggedIn: true,
        cart: action.payload.createdUser.cart,
        wishlist: action.payload.createdUser.wishlist,
        userData: action.payload.createdUser,
      };
    case "END_SESSION":
      return {
        ...state,
        isUserLoggedIn: false,
        userData: {},
        cart: [],
        wishlist: [],
      };
    default:
      return { ...state };
  }
};
export { userReducer };
