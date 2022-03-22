import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CategoryContext = createContext();
const useCategoryContext = () => useContext(CategoryContext);

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  //api call
  useEffect(() => {
    (async () => {
      try {
        const categoryResponse = await axios.get("/api/categories");
        setCategory(categoryResponse.data.categories);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};
export { CategoryContextProvider, useCategoryContext };
