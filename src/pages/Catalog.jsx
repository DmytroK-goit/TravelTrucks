import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { CampersList } from "../components/CampersList/CampersList";
import { getCampers } from "../redux/Camper/operations";

export const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });
  return (
    <div>
      <Header />
      <CampersList />
    </div>
  );
};
