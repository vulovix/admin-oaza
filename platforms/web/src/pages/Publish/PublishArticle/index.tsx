import Editor from "@web/components/Editor";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Checkbox, Input, Loader } from "@equilibrius/ui";
import { useDispatch, useSelector } from "@web/core";
import { selectArticle, selectCategories } from "../selectors";
import { actions } from "../slice";
import "./style.scss";
import Select, { OnChangeValue } from "react-select";
import { Article } from "../types";

export default function PublishArticle(): JSX.Element {
    const { id } = useParams();
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const article = useSelector(selectArticle);
    const [state, setState] = useState<Article>();

    useEffect(() => {
        if (id) {
            dispatch(actions.loadArticle(id));
        }
        return () => {
            
        }
    }, [id]);

    useEffect(() => {
        if (article) {
            setState(article);
        }
    }, [article])

    if(!state || !id){
        return <Loader />;
    }
    
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    const onChange = (e) => {
        if (state) {
            const newState = {
                ...state,
                [e.target.name]: e.target.value,
            }
            setState(newState);
            dispatch(actions.updateArticle(newState))
        }
    }
    const onFileChange = async (e) => {
        try {
            const file = e.target.files[0];
            const b64 = await toBase64(file);
            onChange({
                target: {
                    name: e.target.name,
                    value: b64
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const onCategoryChange = (
        items: OnChangeValue<{value: string, label: string}, true>,
    ) => {
        onChange({
            target: {
                name: "categories",
                value: items.map(item => categories.find(category => category._id === item.value))
            }
        })
    };

    const categoryOptions = categories.map(x => ({
        value: x._id,
        label: x.name,
    }));

    const onCheckboxChange = (e): void => {
        console.log(e.target.checked)
        onChange({
            target: {
                name: e.target.name,
                value: e.target.checked,
            }
        })
    }

    return <div className="publish-article">
        <Checkbox id="public" checked={state.public} label="Public" onChange={onCheckboxChange} />
        <Input name="title" onChange={onChange} value={state?.title} labelComponent={() => <FormattedMessage id="title" />} />
        <Input name="subtitle" onChange={onChange} value={state?.subtitle} labelComponent={() => <FormattedMessage id="subtitle" />} />
        <FormattedMessage id="image" />
        <div className="image-preview" style={{
            backgroundImage: `url(` + state.image + `)`,
        }}></div>
        <Input name="image" accept="image/*" type="file" onChange={onFileChange} />
        <Select
            value={state.categories.map(category => ({
                value: category._id,
                label: category.name,
            }))}
            isMulti
            isClearable
            isSearchable
            // isClearable={value.some((v) => !v.isFixed)}
            name="categories"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onCategoryChange}
            options={categoryOptions}
        />
        <Input name="slug" onChange={onChange} value={state?.slug} labelComponent={() => <FormattedMessage id="slug" />} />
        <Editor readonly={false} id={id} name="description" onChange={onChange} initialState={state ? state.description : null} />
    </div>
}