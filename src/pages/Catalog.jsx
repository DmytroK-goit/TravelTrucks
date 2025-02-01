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
