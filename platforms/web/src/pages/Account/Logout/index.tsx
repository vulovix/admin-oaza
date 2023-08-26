import { useEffect } from "react";

import { actions } from "@web/providers/Auth/slice";
import { Navigate } from "react-router-dom";
import { useDispatch } from "@web/core";

export default function LogoutPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.logout());
  }, []);

  return <Navigate to="/" replace/>;
}
