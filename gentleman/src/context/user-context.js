import { createContext, useContext, useReducer } from "react";
import { userReducer } from "../utils/userReducer";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);
const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    cart: [],
    wishlist: [],
  });

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider, useUserContext };
