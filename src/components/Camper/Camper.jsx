import { Link } from "react-router-dom";
import s from "./Camper.module.css";
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

  return (
    <div className={s.CamperContainer}>
      <div className={s.img_block}>
        <img className={s.img} src={gallery[0]?.original} alt={name} />
      </div>
      <div className={s.info}>
        <div className={s.fist_string}>
          <p className={s.name}>{name}</p>
          <p className={s.price}>€{price}.00</p>
        </div>
        <div className={s.second_string}>
          <p className={s.rating}>
            {rating} ({reviews.length} Reviews)
          </p>
          <p className={s.location}>{location}</p>
        </div>

        <p className={s.description}>{description}</p>
        <Link className={s.button} to={`/campers/${id}`} id={id}>
          Show More
        </Link>
      </div>
    </div>
  );
};
