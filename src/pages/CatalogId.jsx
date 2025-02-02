import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { campersSelectors } from "../redux/Camper/selectors";
import s from "../pages/CatalogId.module.css";
import { Header } from "../components/Header/Header";
import { Reviews } from "../components/Reviews/Reviews";
import { Features } from "../components/Features/Features";
import { getCampersId } from "../../src/redux/Camper/operations";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { SendForm } from "../components/Form/SendForm";

export const CatalogId = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCampersId(id));
  }, [dispatch, id]);

  const [activeTab, setActiveTab] = useState("features");
  const item = useSelector(campersSelectors.selectCamperId);

  if (!item) {
    return <LoaderComponent />;
  }

  const { name, price, rating, location, description, reviews, gallery } = item;
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className={s.catalog_cont}>
        <div className={s.catalog_id}>
          <h2>{name}</h2>
          <div className={s.second_string}>
            <svg className={s.icon_input}>
              <use href="/public/sprite.svg#icon-star"></use>
            </svg>
            <p className={s.rating}>
              {rating} ({reviews.length} Reviews)
            </p>
            <svg className={s.icon_input}>
              <use href="/public/sprite.svg#icon-Map"></use>
            </svg>
            <p className={s.location}>{location}</p>
          </div>
          <p className={s.price}>€{price}.00</p>
          <ul className={s.list_photo}>
            {gallery.map((photo, index) => (
              <li className={s.img} key={index}>
                <img src={photo.thumb} alt={`Gallery image ${index + 1}`} />
              </li>
            ))}
          </ul>
          <p className={s.description}>{description}</p>

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

          <div className={s.content_wrapper}>
            <div className={s.content}>
              {activeTab === "reviews" ? (
                <Reviews reviews={reviews} />
              ) : (
                <Features item={item} />
              )}
            </div>
            {/* <svg>
              <use href="/public/sprite.svg#icon-Vector-1"></use>
            </svg> */}
            <SendForm />
          </div>
        </div>
      </div>
    </div>
  );
};
