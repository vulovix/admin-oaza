import { Article } from "@web/pages/Publish/types";
import "./style.scss";
import { FormattedDate } from "react-intl";
import Editor from "@web/components/Editor";

export default function FullArticle(props: Article): JSX.Element {
    const { _id, description, image, title, subtitle, createdAt } = props;
    return <div className="full-article">
         <div className="img" style={{
            backgroundImage: `url(`+image+`)`,
        }}></div>
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