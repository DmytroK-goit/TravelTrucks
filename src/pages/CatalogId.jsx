import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { campersSelectors } from "../redux/Camper/selectors";
import s from "../pages/CatalogId.module.css";
import { Header } from "../components/Header/Header";
import { Reviews } from "../components/Reviews/Reviews";
import { Features } from "../components/Features/Features";
import { getCampersId } from "../../src/redux/Camper/operations";

export const CatalogId = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getCampersId(id));
  }, [dispatch, id]);
  const [activeTab, setActiveTab] = useState("features");
  const item = useSelector(campersSelectors.selectCamperId);
  if (!item) {
    return <p>Loading...</p>;
  }

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
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className={s.catalog_cont}>
        <div className={s.catalog_id}>
          <h2>{name}</h2>
          <p>
            {rating} {reviews.length} Reviews {location}
          </p>
          <p>€{price}.00</p>
          <ul className={s.list_photo}>
            {gallery.map((photo, index) => (
              <li className={s.img} key={index}>
                <img src={photo.thumb} alt={`Gallery image ${index + 1}`} />
              </li>
            ))}
          </ul>
          <p>{description}</p>

          <div className={s.tabs}>
            <button
              className={activeTab === "features" ? s.active : ""}
              onClick={() => handleTabChange("features")}
            >
              Features
            </button>
            <button
              className={activeTab === "reviews" ? s.active : ""}
              onClick={() => handleTabChange("reviews")}
            >
              Reviews
            </button>
          </div>

          {activeTab === "reviews" ? (
            <Reviews reviews={reviews} />
          ) : (
            <Features item={item} />
          )}
        </div>
      </div>
    </div>
  );
};
