import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import SharedLayout from "./components/SharedLayout";
import { Catalog } from "./pages/Catalog";
import { CatalogId } from "./pages/CatalogId";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/campers" element={<Catalog />} />
        <Route path="/campers/:id" element={<CatalogId />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
