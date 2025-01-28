import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampers } from "../redux/campers/operations";
import { Header } from "../components/Header/Header";
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
    </div>
  );
};
