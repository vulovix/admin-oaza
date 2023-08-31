import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";

export default function MinimalArticle(props: Article): JSX.Element {
    const { title, createdAt } = props;
    return <NavLink className="minimal-article" to={`/articles/${props.slug}`}>
      <h1>{title}</h1>
      <span className="secondary">
        <FormattedDate value={createdAt} dateStyle="medium" />
      </span>
    </NavLink>
}