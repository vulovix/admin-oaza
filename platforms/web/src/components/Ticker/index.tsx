import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Ticker from 'react-ticker'
import "./style.scss";
import TickerItem from './TickerItem';

const data = [
    { id: '1', src: "https://cdn-icons-png.flaticon.com/128/10794/10794833.png", name: "Article 1" },
    { id: '2', src: "https://cdn-icons-png.flaticon.com/128/3809/3809911.png", name: "Article 2" },
    { id: '3', src: "https://cdn-icons-png.flaticon.com/128/2474/2474708.png", name: "Article 3" },
    { id: '4', src: "https://cdn-icons-png.flaticon.com/128/2134/2134484.png", name: "Article 4" },
    { id: '5', src: "https://cdn-icons-png.flaticon.com/128/1939/1939232.png", name: "Article 5" },
];

export default function HomePage(): JSX.Element {
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
    }, []);
    return (
        <div className="oasis-ticker" ref={tickerWrapper as MutableRefObject<HTMLDivElement>}>
            <Ticker move={isHidden ? false : isMoving}>
                {() => data.map(x => <TickerItem key={x.id}>
                    <img className='' src={x.src} />
                    <span>{x.name} {Math.random().toFixed(Math.random() * 10)}</span>
                </TickerItem>)}
            </Ticker>
        </div>
    );
}
