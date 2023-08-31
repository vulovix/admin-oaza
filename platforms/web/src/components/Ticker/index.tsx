import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Ticker from 'react-ticker'
import "./style.scss";
import TickerItem from './TickerItem';
import { useSelector } from 'react-redux';
import { selectArticles } from '@web/pages/Home/selectors';
import { Loader } from '@equilibrius/ui';

export default function HomePage(): JSX.Element {
    const articles = useSelector(selectArticles);
    const tickerWrapper = useRef<HTMLDivElement>();
    const [isMoving, setIsMoving] = useState(true);
    const [isHidden, setIsHidden] = useState(document.hidden);

    const stopMoving = () => {
        setIsMoving(false);
    }
    const continueMoving = () => {
        setIsMoving(true);
    }
    useEffect(() => {
        const ticker = tickerWrapper.current;
        const interval = setInterval(() => {
            setIsHidden(document.hidden);
        }, 1000);
        if (ticker) {
            console.log('registered')
            ticker.addEventListener("mouseover", stopMoving);
            ticker.addEventListener("mouseout", continueMoving);
        }
        return () => {
            clearInterval(interval);
            if (ticker) {
                ticker.removeEventListener("mouseover", stopMoving);
                ticker.removeEventListener("mouseout", continueMoving);
            }
        }
    }, [articles]);
    
    if(!articles?.length){
        return <div className="oasis-ticker empty">
            <div className="ticker"><Loader /></div>
        </div>;
    }
    return (
        <div className="oasis-ticker" ref={tickerWrapper as MutableRefObject<HTMLDivElement>}>
            {/** @ts-ignore */}
            {<Ticker move={isHidden ? false : isMoving} speed={10}>
                {() => articles.map(x => <TickerItem path={`/articles/${x.slug}`} key={x._id}>
                    <img className='' src={x.image} />
                    <span>{x.title}</span>
                </TickerItem>)}
            </Ticker>}
        </div>
    );
}
