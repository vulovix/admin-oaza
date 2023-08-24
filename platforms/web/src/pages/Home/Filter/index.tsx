import { BsFilterLeft } from "react-icons/bs"
import "./style.scss";
import { BiSearch } from "react-icons/bi";

export default function Filter(): JSX.Element {
    return <div className="filter">
        <button><BsFilterLeft /></button>
        <ul>
            <li><a>Latest</a></li>
            <li><a>Featured</a></li>
            <li><a>Automobiles</a></li>
            <li className="active"><a>Celebrities</a></li>
            <li><a>HOllywood directory</a></li>
            <li><a>Trending movines</a></li>
            <li><a>Booking tickets</a></li>
            <li><a>Fans</a></li>
            <li><a>Books</a></li>
        </ul>
        <button><BiSearch /></button>
    </div>
}