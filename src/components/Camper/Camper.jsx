import { Link } from "react-router-dom";
import s from "./Camper.module.css";
import { useState } from "react";

export const Camper = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    reviews,
    gallery,
  } = camper;
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const isFavorite = favorites.includes(camper.id);

  const handleClickFavorite = () => {
    const updatedFavorites = [...favorites];
    if (isFavorite) {
      const index = updatedFavorites.indexOf(camper.id);
      if (index > -1) updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push(camper.id);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className={s.CamperContainer}>
      <div className={s.img_block}>
        <img className={s.img} src={gallery[0]?.original} alt={name} />
      </div>
      <div className={s.info}>
        <div className={s.fist_string}>
          <p className={s.name}>{name}</p>
          <div className={s.price_hart}>
            <p className={s.price}>€{price}.00</p>
            <button
              onClick={handleClickFavorite}
              className={s.hart_button}
              type="button"
            >
              <svg
                className={`${s.icon_input} ${isFavorite ? s.favorite : ""}`}
              >
                <use href="sprite.svg#icon-hart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={s.second_string}>
          <svg className={s.icon_input}>
            <use href="sprite.svg#icon-star"></use>
          </svg>
          <p className={s.rating}>
            {rating} ({reviews.length} Reviews)
          </p>
          <svg className={s.icon_input}>
            <use href="sprite.svg#icon-Map"></use>
          </svg>
          <p className={s.location}>{location}</p>
        </div>

        <p className={s.description}>{description}</p>
        <ul className={s.ul}>
          <li className={s.ul_li}>
            <svg className={s.icon}>
              <use href="sprite.svg#icon-fuel-pump"></use>
            </svg>{" "}
            {engine}
          </li>
          <li className={s.ul_li}>
            <svg className={s.icon}>
              <use href="sprite.svg#icon-diagram"></use>
            </svg>{" "}
            {transmission}
          </li>
          {kitchen && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="sprite.svg#icon-cup-hot"></use>
              </svg>{" "}
              Kitchen
            </li>
          )}
          {AC && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="sprite.svg#icon-wind"></use>
              </svg>{" "}
              AC
            </li>
          )}
        </ul>
        <Link className={s.button} to={`/campers/${id}`} id={id}>
          Show More
        </Link>
      </div>
    </div>
  );
};
