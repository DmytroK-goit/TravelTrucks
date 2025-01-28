import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { getCampers } from "../redux/campers/operations";

import { Header } from "../components/Header.jsx";
import { CampersList } from "../components/CampersList/CampersList.jsx";

export const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });
  return (
    <div>
      <Header />
      <CampersList />
      <p>CATALOG</p>
    </div>
  );
};
