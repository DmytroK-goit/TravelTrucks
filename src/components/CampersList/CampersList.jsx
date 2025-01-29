import { useState } from "react";
import s from "./CampersList.module.css";
import { Camper } from "../Camper/Camper";

export const CampersList = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className={s.CamperContainer}>
      <ul className={s.list}>
        {items.slice(0, visibleCount).map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>

      {visibleCount < items.length && (
        <button className={s.loadMoreBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
