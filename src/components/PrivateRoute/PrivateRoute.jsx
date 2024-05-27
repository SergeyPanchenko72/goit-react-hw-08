import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function PrivateRoute({ component, redirectTo }) {
  const isLogedIn = useSelector(selectIsLoggedIn);
  return isLogedIn ? component : <Navigate to={redirectTo} />;
}
