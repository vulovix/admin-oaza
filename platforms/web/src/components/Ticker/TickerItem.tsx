import { PropsWithChildren } from "react";

export default function TickerItem(props: PropsWithChildren<unknown>){
    return <div className='ticker-item'>
      <div className='ticker-flex'>
        {props.children}
      </div>
    </div>
  }
  