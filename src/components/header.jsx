import { Link } from "react-router-dom";
import s from "../components/Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__content}>
        <h1 className={s.header__title}>Header</h1>
        <nav className={s.header__nav}>
          <Link to="/" className={s.header__link}>
            Home
          </Link>
          <Link to="/campers" className={s.header__link}>
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};
