import { useState } from "react";
import s from "./SearchBar.module.css";

export const SearchBar = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [equipment, setEquipment] = useState({
    AC: false,
    transmission: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ location, vehicleType, equipment });
  };

  const handleVehicleTypeClick = (type) => {
    setVehicleType(type);
  };

  const equipmentOptions = ["AC", "kitchen", "TV", "bathroom", "transmission"];

  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
      <div className={s.filter_location}>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
      </div>

      <div className={s.filter_vahicle}>
        <p className={s.filter_title}>Filters</p>

        <div className={s.filterSection}>
          <label>Vehicle equipment</label>
          <div className={s.equipmentButtons}>
            {equipmentOptions.map((equip) => (
              <button
                key={equip}
                type="button"
                className={
                  equipment[equip] ||
                  (equip === "transmission" &&
                    equipment.transmission === "automatic")
                    ? s.selected
                    : ""
                }
                onClick={() =>
                  equip === "transmission"
                    ? handleTransmissionChange()
                    : handleEquipmentChange(equip)
                }
              >
                {equip === "transmission"
                  ? equipment.transmission === "automatic"
                    ? "automatic"
                    : "manual"
                  : equip}
              </button>
            ))}
          </div>
        </div>

        <div className={s.filterSection}>
          <label>Vehicle type</label>
          <div className={s.vehicleTypeButtons}>
            {["panelTruck", "fullyIntegrated", "alcove"].map((type) => (
              <button
                key={type}
                className={vehicleType === type ? s.active : ""}
                onClick={() => handleVehicleTypeClick(type)}
              >
                {type.replace("_", " ").toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};
