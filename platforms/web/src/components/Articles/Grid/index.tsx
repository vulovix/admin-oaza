import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import { NavLink } from "react-router-dom";
import Image from "../Image";

export default function GridArticle(props: Article): JSX.Element {
    const { image, title, subtitle, createdAt } = props;
    return <NavLink className="grid-article" to={`/articles/${props.slug}`}>
        <div>
            <Image src={image} />
            <div className="info">
                <h1 className="title">{title}</h1>
                <span className="secondary">
                    <FormattedDate value={createdAt} dateStyle="medium" />
                </span>
            </div>
        </div>
        <p className="paragraph">
            {subtitle}
        </p>
    </NavLink>
}