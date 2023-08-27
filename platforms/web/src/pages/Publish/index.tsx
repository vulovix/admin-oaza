import { FormattedMessage, useDispatch, useReducer, useSaga, useSelector } from "@web/core";
import { PUBLISH_SCOPE, getDefaultArticle } from "./constants";
import { actions, reducer } from "./slice";
import saga from "./saga";
import "./style.scss";
import { useEffect } from "react";
import { selectArticles, selectCategories } from "./selectors";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "@equilibrius/ui";
import { FiPlus, FiTrash } from "react-icons/fi";

export default function PublishPage(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    useReducer({key: PUBLISH_SCOPE, reducer: reducer});
    useSaga({key: PUBLISH_SCOPE, saga: saga });

    useEffect(() => {
        dispatch(actions.loadArticles());
        dispatch(actions.loadCategories());
    }, []);

    const articles = useSelector(selectArticles);
    const categories = useSelector(selectCategories);

    const onCreateArticle = (e): void => {
        const article = getDefaultArticle();
        // @ts-ignore
        dispatch(actions.createArticle(article));
    }

    const onRemoveArticle = (articleId) => {
        if(window.confirm("Are you sure you want to remove article?")){
            dispatch(actions.removeArticle(articleId));
            if(id === articleId){
                navigate('/publish');
            }
        }
    }
    
    return <div className="publish-page">
        <div className="sidenav">
            <h4 className="section-title">
                <FormattedMessage id="articles"/> 
                <Button kind="success" onClick={onCreateArticle}>
                    <FiPlus />
                </Button>
                </h4>
            <ul className="section-items">
                {articles.map((article) => <li>
                    <NavLink to={`/publish/article/${article._id}`} >{article.title}</NavLink>
                    <Button kind="danger" onClick={() => onRemoveArticle(article._id)}>
                        <FiTrash />
                    </Button>
                </li>)}
            </ul>
            <h4 className="section-title"><FormattedMessage id="categories"/></h4>
            <ul className="section-items">
                {categories.map((category) => <li>
                    <NavLink to={`/publish/category/${category._id}`} >{category.name}</NavLink>
                </li>)}
            </ul>
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>
}