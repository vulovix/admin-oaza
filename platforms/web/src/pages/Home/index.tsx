import { Ticker } from "@web/components";
import "./style.scss";
import Filter from "./Filter";

export default function HomePage(): JSX.Element {
  
  return (
    <div className="home-page">
      <Ticker />
      <Filter />
    </div>
  );
}
