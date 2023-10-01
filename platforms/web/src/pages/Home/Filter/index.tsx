import { BsFilterLeft } from "react-icons/bs";
import "./style.scss";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "@web/core";
import { selectCategories } from "../selectors";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { actions } from "../slice";

export default function Filter(): JSX.Element {
  const categories = useSelector(selectCategories);
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCategories());
  }, []);
  return (
    <div className="filter">
      <button>
        <BsFilterLeft />
      </button>
      <ul>
        {categories?.map((category): JSX.Element => {
          const isActive = categoryId === category.slug;
          return (
            <li className={isActive ? "active" : undefined}>
              <NavLink to={`${isActive ? "/" : "/categories/" + category.slug}`}>{category.name}</NavLink>
            </li>
          );
        })}
      </ul>
      {/* <button><BiSearch /></button> */}
    </div>
  );
}
