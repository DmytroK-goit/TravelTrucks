import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { CampersList } from "../components/CampersList/CampersList";
import { getCampers } from "../redux/Camper/operations";
import { SearchBar } from "../components/SearchBar/SearchBar";
import s from "../pages/Catalog.module.css";
import { campersSelectors } from "../redux/Camper/selectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filters) => {
    dispatch(getCampers(filters));
  };
  const allCampers = useSelector(campersSelectors.selectCampers);

  // const [filters, setFilters] = useState({
  //   location: "",
  //   vehicleType: "",
  //   equipment: {
  //     AC: false,
  //     automatic: false,
  //     kitchen: false,
  //     TV: false,
  //     bathroom: false,
  //   },
  // });

  // const filterCampers = (camper) => {
  //   return (
  //     (!filters.location ||
  //       camper.location
  //         .toLowerCase()
  //         .includes(filters.location.toLowerCase())) &&
  //     (!filters.vehicleType || camper.form === filters.vehicleType) &&
  //     (!filters.equipment.AC || camper.AC) &&
  //     (!filters.equipment.transmission ||
  //       camper.transmission.toLowerCase() === filters.equipment.transmission) &&
  //     (!filters.equipment.kitchen || camper.kitchen) &&
  //     (!filters.equipment.TV || camper.TV) &&
  //     (!filters.equipment.bathroom || camper.bathroom)
  //   );
  // };

  // const filteredCampers = allCampers;

  return (
    <div>
      <Header />
      <div className={s.container_Catalog}>
        <SearchBar onFilterChange={handleFilterChange} />
        <CampersList items={allCampers} />
      </div>
    </div>
  );
};
