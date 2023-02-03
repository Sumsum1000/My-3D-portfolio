import style from "./Home.module.scss";
import { subjectsList } from "../Data/HomeData";

export const Home = () => {
  return (
    <div className={style["home-container"]}>
      {subjectsList.map((item) => {
        return (
          <div className={style["subject-container"]}>
            <div>
              <img src={item.src} />
            </div>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
