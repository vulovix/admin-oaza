import { selectIsLoggedIn } from "@web/providers/Auth/selectors";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props: PropsWithChildren<unknown>): JSX.Element {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return <>{props.children}</>;
}