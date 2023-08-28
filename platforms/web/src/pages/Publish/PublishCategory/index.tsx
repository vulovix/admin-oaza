import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Input, Loader } from "@equilibrius/ui";
import { useDispatch, useSelector } from "@web/core";
import { selectCategory } from "../selectors";
import { actions } from "../slice";
import "./style.scss";
import { Article, Category } from "../types";

export default function PublishCategory(): JSX.Element {
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const [state, setState] = useState<Category>();

    useEffect(() => {
        if (id) {
            dispatch(actions.loadCategory(id));
        }
        return () => {
            
        }
    }, [id]);

    useEffect(() => {
        if (category) {
            setState(category);
        }
    }, [category])

    if(!state || !id){
        return <Loader />;
    }


    const onChange = (e) => {
        if (state) {
            const newState = {
                ...state,
                [e.target.name]: e.target.value,
            }
            setState(newState);
            dispatch(actions.updateCategory(newState));
        }
    }

    return <div className="publish-category">
        <Input name="name" onChange={onChange} value={state?.name} labelComponent={() => <FormattedMessage id="name" />} />
        <Input name="slug" onChange={onChange} value={state?.slug} labelComponent={() => <FormattedMessage id="slug" />} />
    </div>
}