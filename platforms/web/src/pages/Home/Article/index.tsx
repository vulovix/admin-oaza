import { useEffect } from "react";

import { useDispatch, useSelector } from "@web/core";
import "./style.scss";
import { selectArticle } from "../selectors";
import { useParams } from "react-router-dom";
import { actions } from "../slice";
import { Loader } from "@equilibrius/ui";
import FullArticle from "@web/components/Articles/Full";

export default function Article(): JSX.Element {
    const article = useSelector(selectArticle);

    const dispatch = useDispatch();
    const { articleId } = useParams();
    
    useEffect(() => {
        if(articleId){
            dispatch(actions.loadArticleById(articleId));
        }
        return () => {
            dispatch(actions.resetArticle());
        }
    }, [articleId]);


    if(!article){
        return <div className="articles">
                    <div className="area-center center"><Loader /></div>
                </div>
    }
    
    return <div className="articles article">
        <FullArticle {...article} />
    </div>
}