import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import SharedLayout from "./components/SharedLayout";
import { Catalog } from "./pages/Catalog";
import { CatalogId } from "../src/pages/CatalogId";
import { getCampers } from "./redux/Camper/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const handleFilterChange = () => {
    dispatch(getCampers());
  };

  useEffect(() => {
    handleFilterChange();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/campers" element={<Catalog />} />
        <Route path="/campers/:id" element={<CatalogId />} />
      </Route>
    </Routes>
  );
}

export default App;
