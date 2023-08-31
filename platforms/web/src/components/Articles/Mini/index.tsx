import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";

export default function MiniArticle(props: Article): JSX.Element {
    const { image, title, createdAt } = props;
    return <NavLink className="mini-article" to={`/articles/${props.slug}`}>
        <div className="img" style={{
            backgroundImage: `url(`+image+`)`,
        }}></div>
        <div className="info">
            <h1>{title}</h1>
            <span className="secondary">{<FormattedDate value={createdAt} dateStyle="medium" />}</span>
        </div>
    </NavLink>
}