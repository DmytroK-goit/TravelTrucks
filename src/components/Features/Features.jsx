import { SendForm } from "../Form/SendForm";
import s from "./Features.module.css";

export const Features = ({ item }) => {
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
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = item;

  return (
    <div className={s.container}>
      <div className={s.information}>
        <ul className={s.ul}>
          <li className={s.ul_li}>
            {" "}
            <svg className={s.icon}>
              <use href="../../../public/sprite.svg#icon-fuel-pump"></use>
            </svg>{" "}
            {engine}
          </li>
          <li className={s.ul_li}>
            {" "}
            <svg className={s.icon}>
              <use href="../../../public/sprite.svg#icon-diagram"></use>
            </svg>{" "}
            {transmission}
          </li>
          {kitchen && (
            <li className={s.ul_li}>
              {" "}
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-cup-hot"></use>
              </svg>{" "}
              Kitchen
            </li>
          )}
          {AC && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-wind"></use>
              </svg>{" "}
              AC
            </li>
          )}
          {bathroom && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-ph_shower"></use>
              </svg>{" "}
              Bathroom
            </li>
          )}
          {TV && (
            <li className={s.ul_li}>
              {" "}
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-tv"></use>
              </svg>{" "}
              TV
            </li>
          )}
          {water && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-ion_water-outline"></use>
              </svg>{" "}
              Water
            </li>
          )}
          {refrigerator && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-solar_fridge-outline"></use>
              </svg>{" "}
              Refrigerator
            </li>
          )}
          {microwave && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-lucide_microwave"></use>
              </svg>{" "}
              Microwave
            </li>
          )}
          {gas && (
            <li className={s.ul_li}>
              <svg className={s.icon}>
                <use href="../../../public/sprite.svg#icon-lucide_microwave"></use>
              </svg>{" "}
              Gas
            </li>
          )}
        </ul>

        <div className={s.vahicle_det}>
          <p>Vehicle details</p>
          <ul>
            <li>
              <p>Form</p>
              {form}
            </li>
            <li>
              <p>Length</p>
              {length}
            </li>
            <li>
              <p>Width</p>
              {width}
            </li>
            <li>
              <p>Height</p>
              {height}
            </li>
            <li>
              <p>Tank</p>
              {tank}
            </li>
            <li>
              <p>Consumption</p>
              {consumption}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
