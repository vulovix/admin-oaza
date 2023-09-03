import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import Editor from "@web/components/Editor";
import Image from "../Image";
import ImageAsync from "../ImageAsync";

export default function FullArticle(props: Article): JSX.Element {
    const { _id, description, slug, title, subtitle, createdAt } = props;
    return <div className="full-article">
        <ImageAsync src={`/api/articles/public/images/${slug}`} />
        <span className="secondary"><FormattedDate value={createdAt} dateStyle="medium"/></span>
        <h1 className="title">{title}</h1>
        <p className="paragraph">
            {subtitle}
        </p>
        <Editor
            id={_id}
            onChange={() => {}}
            name={"editor"}
            readonly={true}
            initialState={description}
        />
    </div>
}