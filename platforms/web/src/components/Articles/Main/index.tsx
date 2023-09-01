import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";
import Image from "../Image";

export default function MainArticle(props: Article): JSX.Element {
    const { image, title, subtitle, createdAt } = props;
    return <NavLink className="main-article" to={`/articles/${props.slug}`}>
        <Image src={image} />
        <span className="secondary"><FormattedDate value={createdAt} dateStyle="medium"/></span>
        <h1 className="title">{title}</h1>
        <p className="paragraph">
            {subtitle}
        </p>
    </NavLink>
}