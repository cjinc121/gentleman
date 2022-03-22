import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { productReducer } from "../utils/productReducer";
const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);
const ProductContextProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    product: [],

    sort: null,
    fastdelivery: false,
    instock: false,
    range: 5000,
  });
  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get("/api/products");

        productDispatch({
          type: "Add_Product_List",
          payload: productResponse.data.products,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContextProvider, useProductContext };
