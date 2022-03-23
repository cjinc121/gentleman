import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { productReducer } from "../utils/productReducer";
import {
  compose,
  filterDataByRating,
  filterDataByfastdelivery,
  filterDataByCategory,
  filterDataByinstock,
  filterDataByRange,
  sortDataByPrice,
} from "../utils/productFilter&Sort";
const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);
const ProductContextProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    product: [],
    sort: null,
    fastdelivery: false,
    instock: false,
    range: 5000,
    rating: null,
    category: [],
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
  const filterData = compose(
    productState,
    filterDataByRange,
    filterDataByRating,
    filterDataByfastdelivery,
    filterDataByinstock,
    sortDataByPrice,
    filterDataByCategory
  );
  console.log(filterData);
  return (
    <ProductContext.Provider
      value={{ productState, productDispatch, filterData }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContextProvider, useProductContext };
