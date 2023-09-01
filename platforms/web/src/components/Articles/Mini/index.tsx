import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";
import Image from "../Image";

export default function MiniArticle(props: Article): JSX.Element {
    const { image, title, createdAt } = props;
    return <NavLink className="mini-article" to={`/articles/${props.slug}`}>
        <Image src={image} />
        <div className="info">
            <h1>{title}</h1>
            <span className="secondary">{<FormattedDate value={createdAt} dateStyle="medium" />}</span>
        </div>
    </NavLink>
}