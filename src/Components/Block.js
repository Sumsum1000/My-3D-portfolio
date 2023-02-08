import style from './Block.module.scss';
import { subjectsList } from "../Data/HomeData";

export const Block = ({src}) => {
  return (
    <div className={style['block-container']}>
        <img src={src} className={style['img-block-container']}/>
    </div>
  )
}
