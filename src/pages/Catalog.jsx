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

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const allCampers = useSelector(campersSelectors.selectCampers);

  const [filters, setFilters] = useState({
    location: "",
    form: "",
    equipment: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
  });

  const filterCampers = (camper) => {
    return (
      (!filters.location ||
        camper.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (!filters.form ||
        camper.form.toLowerCase().includes(filters.form.toLowerCase())) &&
      (!filters.equipment.AC || camper.AC) &&
      (!filters.equipment.automatic || camper.transmission === "Automatic") &&
      (!filters.equipment.kitchen || camper.kitchen) &&
      (!filters.equipment.TV || camper.TV) &&
      (!filters.equipment.bathroom || camper.bathroom)
    );
  };

  const filteredCampers = allCampers.filter(filterCampers);

  return (
    <div>
      <Header />
      <div className={s.container_Catalog}>
        <SearchBar onFilterChange={setFilters} />
        <CampersList items={filteredCampers} />
      </div>
    </div>
  );
};
