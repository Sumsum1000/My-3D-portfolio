import style from "./Home.module.scss";
import { subjectsList } from "../Data/HomeData";
import { Block } from '../Components/Block';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={style["home-container"]}>
      {subjectsList.map((item) => {
        return (
          <div className={style["subject-container"]}>
            <Link to={item.path}>
            <Block src={item.src}/>
            </Link>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
