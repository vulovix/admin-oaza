import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "@web/core";
import MainArticle from "@web/components/Articles/Main";

import { actions } from "../slice";
import { selectCategorizedArticles } from "../selectors";
import "./style.scss";
import { Loader } from "@equilibrius/ui";

export default function CategorizedArticles(): JSX.Element {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const articles = useSelector(selectCategorizedArticles);
    
    useEffect(() => {
        if(categoryId){
            dispatch(actions.loadArticlesByCategoryId(categoryId));
        }
        return () => {
            dispatch(actions.resetCategorizedArticles());
        }
    }, [categoryId]);

    if(!articles?.length){
        return <div className="articles">
                    <div className="area-center center"><Loader /></div>
                </div>
    }

    return <div className="categorized-articles">
            {articles.map(article => <MainArticle {...article} />)}
        </div>
}