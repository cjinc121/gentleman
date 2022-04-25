import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user-context";

const PrivateRoute = ({ navigateTo }) => {
  const { userState } = useUserContext();
  return userState.isUserLoggedIn ? (
    navigateTo
  ) : (
    <Navigate replace to="/login"></Navigate>
  );
};
export { PrivateRoute };
