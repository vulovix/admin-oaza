import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default function TickerItem(props: PropsWithChildren<{path: string}>){
    return <Link to={props.path} className='ticker-item'>
      <div className='ticker-flex'>
        {props.children}
      </div>
    </Link>
  }
  