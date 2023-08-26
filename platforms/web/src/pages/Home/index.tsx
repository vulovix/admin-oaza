import { Ticker } from "@web/components";
import "./style.scss";
import Filter from "./Filter";
import Articles from "./Articles";
import Nav from "@web/components/Nav";

export default function HomePage(): JSX.Element {
  
  return (
    <div className="home-page">
      <Ticker />
      <Filter />
      <div className="content">
        <Articles />
      </div>
    </div>
  );
}
