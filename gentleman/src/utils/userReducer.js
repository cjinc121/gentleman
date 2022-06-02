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
    case "GET_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
    case "ADD_NEW_ORDER":
      return {
        ...state,
        orders: action.payload,
      };
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "TOGGLE_ADDRESS_MODAL":
      return { ...state, showAddressModal: action.payload };

    case "ADDRESS_TO_EDIT":
      return { ...state, addressToEdit: action.payload };

    case "USER_PROFILE_TAB":
      return { ...state, userProfileTab: action.payload };

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
        tokenVal: action.payload.encodedToken,
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
