import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";
import Image from "../Image";
import ImageAsync from "../ImageAsync";

export default function MiniArticle(props: Article): JSX.Element {
    const { slug, title, createdAt } = props;
    return <NavLink className="mini-article" to={`/articles/${props.slug}`}>
        <ImageAsync src={`/api/articles/public/images/${slug}`} />
        <div className="info">
            <h1>{title}</h1>
            <span className="secondary">{<FormattedDate value={createdAt} dateStyle="medium" />}</span>
        </div>
    </NavLink>
}