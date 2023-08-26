import { Loader } from "@equilibrius/ui";
import { PropsWithChildren, useEffect } from "react";

import { useDispatch, useReducer, useSaga, useSelector } from "@web/core";

import { AUTH_SCOPE, AppStatus } from "./constants";
import saga from "./saga";
import { selectAppStatus, selectIsLoggedIn } from "./selectors";
import { actions, reducer } from "./slice";
import "./style.scss";
import Logo from "@web/components/Logo";
import LogoSimple from "@web/components/LogoSimple";

export default function AuthProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
  useReducer({ key: AUTH_SCOPE, reducer });
  useSaga({ key: AUTH_SCOPE, saga: saga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.info());
  }, []);

  const appStatus = useSelector(selectAppStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (appStatus === AppStatus.NotReady) {
    return (
      <div className="loading-overlay">
        {/* <Logo />
        <img className="invert" src="/favicon64x64.png"/> */}
        {/* <LogoSimple /> */}
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
