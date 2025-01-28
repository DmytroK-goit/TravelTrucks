import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampersId } from "../redux/campers/operations";
import { campersSelectors } from "../redux/campers/selectors";
import s from "./CatalogId.module.css";
export const CatalogId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampersId(id));
  }, [dispatch, id]);
  const item = useSelector(campersSelectors.selectCamperId);
  const {
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
  } = item;

  return (
    <div>
      <ul className={s.list_photo}>
        {gallery.map((photo, index) => (
          <li key={index}>
            <div className={s.img}>
              <img src={photo.thumb} alt={`Gallery image ${index + 1}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
