export const productReducer = (state, action) => {
  switch (action.type) {
    case "Add_Product_List":
      return { ...state, product: action.payload };
    case "HIGH_TO_LOW":
      return { ...state, sort: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sort: "LOW_TO_HIGH" };
    case "FAST_DELIVERY":
      return { ...state, fastdelivery: !state.fastdelivery };
    case "ONLY_IN_STOCK":
      return { ...state, instock: !state.instock };
    case "RANGE":
      return { ...state, range: action.payload };
    case "CLEAR_ALL":
      return {
        ...state,
        sort: null,
        fastdelivery: false,
        instock: false,
        range: 5000,
      };
    default:
      return state;
  }
};
