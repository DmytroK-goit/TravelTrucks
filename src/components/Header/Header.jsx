import { Link } from "react-router-dom";
import s from "../Header/Header.module.css";
import logo from "../../img/Logo.png";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <a href="/" className={s.header__title}>
          <img src={logo} alt="Logo" />
        </a>
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
