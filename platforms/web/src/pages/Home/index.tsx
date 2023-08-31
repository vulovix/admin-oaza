import { Ticker } from "@web/components";
import "./style.scss";
import Filter from "./Filter";
import { useSaga, useReducer } from "@web/core";
import { HOME_PAGE_SCOPE } from "./constants";
import saga from "./saga";
import { actions, reducer } from "./slice";
import { Outlet } from "react-router-dom";
import { useDispatch } from "@web/core";
import { useEffect } from "react";

export default function HomePage(): JSX.Element {
  useReducer({key: HOME_PAGE_SCOPE, reducer: reducer });
  useSaga({key: HOME_PAGE_SCOPE, saga: saga });
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(actions.loadArticles());
}, []);

  return (
    <div className="home-page">
      <Ticker />
      <Filter />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
