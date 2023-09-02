import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";
import Image from "../Image";
import ImageAsync from "../ImageAsync";

export default function MainArticle(props: Article): JSX.Element {
    const { slug, title, subtitle, createdAt } = props;
    return <NavLink className="main-article" to={`/articles/${props.slug}`}>
        <ImageAsync src={`/api/articles/public/images/${slug}`} />
        <span className="secondary"><FormattedDate value={createdAt} dateStyle="medium"/></span>
        <h1 className="title">{title}</h1>
        <p className="paragraph">
            {subtitle}
        </p>
    </NavLink>
}