export const productReducer = (state, action) => {
  switch (action.type) {
    case "Add_Product_List":
      return { ...state, product: action.payload };
    case "CATEGORY":
      const isAdded = state.category.find((item) => item === action.payload);
      if (isAdded === undefined) {
        return { ...state, category: [...state.category, action.payload] };
      } else {
        const newCategory = state.category.filter(
          (item) => item != action.payload
        );
        return { ...state, category: newCategory };
      }
    case "SET_CATEGORY":
      return { ...state, category: [action.payload] };
    case "HIGH_TO_LOW":
      return { ...state, sort: "HIGH" };
    case "LOW_TO_HIGH":
      return { ...state, sort: "LOW" };
    case "FAST_DELIVERY":
      return { ...state, fastdelivery: !state.fastdelivery };
    case "ONLY_IN_STOCK":
      return { ...state, instock: !state.instock };
    case "RANGE":
      return { ...state, range: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CLEAR_ALL":
      return {
        ...state,
        sort: null,
        fastdelivery: false,
        instock: false,
        range: 5000,
        rating: null,
        category: [],
      };
    default:
      return state;
  }
};
