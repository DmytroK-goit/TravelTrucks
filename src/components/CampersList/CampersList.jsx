import { useSelector } from "react-redux";
import s from "./CampersList.module.css";
import { Camper } from "../Camper/Camper";
import { campersSelectors } from "../../redux/Camper/selectors";

export const CampersList = () => {
  const items = useSelector(campersSelectors.selectCampers);

  return (
    <div className={s.CamperContainer}>
      <ul className={s.list}>
        {items.map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};
