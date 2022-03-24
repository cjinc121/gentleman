const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload.product.id
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.product.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.product.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
      };
    default:
      return { ...state };
  }
};
export { userReducer };
