import { useDispatch } from "react-redux";
import { Header } from "../components/Header.jsx";
import { useEffect } from "react";
import { getCampers } from "../redux/campers/operations";
import { CampersList } from "../components/CampersList/CampersList";

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
