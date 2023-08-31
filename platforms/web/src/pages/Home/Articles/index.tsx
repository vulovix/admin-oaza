import { useEffect } from "react";

import { useDispatch, useSelector } from "@web/core";
import "./style.scss";
import { selectArticles } from "../selectors";
import MiniArticle from "@web/components/Articles/Mini";
import MinimalArticle from "@web/components/Articles/Minimal";
import MainArticle from "@web/components/Articles/Main";
import SplitArticle from "@web/components/Articles/Split";
import GridArticle from "@web/components/Articles/Grid";
import { Loader } from "@equilibrius/ui";

export default function Articles(): JSX.Element {
    const articles = useSelector(selectArticles);

    if(!articles?.length){
        return <div className="articles">
            <div className="area-center center"><Loader /></div>
        </div>
    }
    
    const mainArticles = articles.slice(0, 3);
    const gridArticles = articles.slice(3, 6);
    const miniArticles = articles.slice(6, 9);
    const minimalArticles = articles.slice(9, 12);

    return <div className="articles">
        <div className="area-left">
            {/* <SplitArticle {...article1} /> */}
            {gridArticles.map(article => <GridArticle {...article} />)}

        </div>

        <div className="area-center">
            {/* <MainArticle {...article1} /> */}
            {mainArticles.map(article => <MainArticle {...article} />)}
        </div>

        <div className="area-right">
            <div className="ad"></div>

            {miniArticles.map(article => <MiniArticle {...article} />)}

            {minimalArticles.map(article => <MinimalArticle {...article} />)}
        </div>
    </div>
}