import { useState } from "react";
import s from "./SearchBar.module.css";

export const SearchBar = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [equipment, setEquipment] = useState({
    AC: true,
    transmission: "automatic",
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const handleEquipmentChange = (name) => {
    setEquipment({ ...equipment, [name]: !equipment[name] });
  };

  const handleTransmissionChange = () => {
    setEquipment({
      ...equipment,
      transmission:
        equipment.transmission === "automatic" ? "manual" : "automatic",
    });
  };

  const handleVehicleTypeClick = (type) => {
    setForm(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {
      location: location || undefined,
      form: form || undefined,
      AC: equipment.AC || undefined,
      transmission:
        equipment.transmission !== "automatic"
          ? equipment.transmission
          : undefined,
      kitchen: equipment.kitchen || undefined,
      TV: equipment.TV || undefined,
      bathroom: equipment.bathroom || undefined,
    };

    const filteredParams = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== undefined)
    );

    onFilterChange(filteredParams);
  };

  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
      <div className={s.filter_location}>
        <label>Location</label>
        <div className={s.inputWrapper}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
          <svg className={s.icon_input}>
            <use href="sprite.svg#icon-Map"></use>
          </svg>
        </div>
      </div>

      <div className={s.filter_vahicle}>
        <p className={s.filter_title}>Filters</p>

        <div className={s.filterSection}>
          <label>Vehicle equipment</label>
          <div className={s.equipmentButtons}>
            <ul className={s.ul}>
              <li>
                {" "}
                <button
                  type="button"
                  className={equipment.AC ? s.selected : ""}
                  onClick={() => handleEquipmentChange("AC")}
                >
                  {" "}
                  <svg className={s.icon}>
                    <use href="sprite.svg#icon-wind"></use>
                  </svg>
                  AC
                </button>
              </li>
              <li>
                {" "}
                <button
                  type="button"
                  className={equipment.kitchen ? s.selected : ""}
                  onClick={() => handleEquipmentChange("kitchen")}
                >
                  <svg className={s.icon}>
                    <use href="sprite.svg#icon-cup-hot"></use>
                  </svg>
                  Kitchen
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={equipment.TV ? s.selected : ""}
                  onClick={() => handleEquipmentChange("TV")}
                >
                  {" "}
                  <svg className={s.icon}>
                    <use href="sprite.svg#icon-tv"></use>
                  </svg>
                  TV
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={equipment.bathroom ? s.selected : ""}
                  onClick={() => handleEquipmentChange("bathroom")}
                >
                  {" "}
                  <svg className={s.icon}>
                    <use href="symbol-defs.svg#icon-ph_shower"></use>
                  </svg>
                  Bathroom
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={
                    equipment.transmission === "automatic" ? s.selected : ""
                  }
                  onClick={handleTransmissionChange}
                >
                  {" "}
                  <svg className={s.icon}>
                    <use href="sprite.svg#icon-diagram"></use>
                  </svg>{" "}
                  {equipment.transmission === "automatic"
                    ? "automatic"
                    : "manual"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.filterSection}>
          <label>Vehicle type</label>
          <div className={s.vehicleTypeButtons}>
            <button
              className={form === "panelTruck" ? s.active : ""}
              onClick={() => handleVehicleTypeClick("panelTruck")}
            >
              {" "}
              <svg className={s.icon}>
                <use href="sprite.svg#icon-bi_grid-1x2"></use>
              </svg>{" "}
              Van
            </button>
            <button
              className={form === "fullyIntegrated" ? s.active : ""}
              onClick={() => handleVehicleTypeClick("fullyIntegrated")}
            >
              {" "}
              <svg className={s.icon}>
                <use href="sprite.svg#icon-bi_grid"></use>
              </svg>{" "}
              Fully Integrated
            </button>
            <button
              className={form === "alcove" ? s.active : ""}
              onClick={() => handleVehicleTypeClick("alcove")}
            >
              {" "}
              <svg width="32" height="32" className={s.icon}>
                <use href="sprite.svg#icon-bi_grid-3x3-gap"></use>
              </svg>{" "}
              Alcove
            </button>
          </div>
        </div>
      </div>
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};
