import { selectIsLoggedIn } from "@web/providers/Auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Index(): JSX.Element {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/publish" />;
  }
  return <Navigate to="/sign-in" />;
}
