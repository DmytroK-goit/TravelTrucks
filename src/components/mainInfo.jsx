import { Link } from "react-router-dom";
import s from "../components/MainInfo.module.css";
export const MainInfo = () => {
  return (
    <div className={s.hero}>
      <div className={s.hero_container}>
        <h1 className={s.header}>Campers of your dreams</h1>
        <p className={s.paragraph}>
          You can find everything you want in our catalog
        </p>
        <Link className={s.button} to="/campers">
          View Now
        </Link>
      </div>
    </div>
  );
};
