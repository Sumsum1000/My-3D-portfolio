import style from "./Home.module.scss";
import { subjectsList } from "../Data/HomeData";

export const Home = () => {
  return (
    <div className={style["home-container"]}>
      {subjectsList.map((item) => {
        return (
          <div>
            <img src={item.src} />
            {/* <p>{item.name}</p> */}
          </div>
        );
      })}
    </div>
  );
};
