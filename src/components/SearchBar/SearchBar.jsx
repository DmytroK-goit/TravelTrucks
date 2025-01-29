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

  const handleTransmissionChange = (type) => {
    setEquipment({ ...equipment, transmission: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ location, vehicleType, equipment });
  };

  const handleVehicleTypeClick = (type) => {
    setVehicleType(type);
  };

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
        <p>Filters</p>
        <div className={s.filterSection}>
          <label>Vehicle type</label>
          <div className={s.vehicleTypeButtons}>
            {["van", "fully_integrated", "alcove"].map((type) => (
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

      <div className={s.filterSection}>
        <label>Vehicle equipment</label>
        <div className={s.equipmentButtons}>
          {["AC", "kitchen", "TV", "bathroom"].map((equip) => (
            <button
              key={equip}
              type="button"
              className={equipment[equip] ? s.selected : ""}
              onClick={() => handleEquipmentChange(equip)}
            >
              {equip}
            </button>
          ))}
        </div>
      </div>

      <div className={s.filterSection}>
        <label>Transmission</label>
        <div className={s.transmission}>
          <button
            type="button"
            onClick={() => handleTransmissionChange("automatic")}
            className={equipment.transmission === "automatic" ? s.selected : ""}
          >
            Auto
          </button>
          <button
            type="button"
            onClick={() => handleTransmissionChange("manual")}
            className={equipment.transmission === "manual" ? s.selected : ""}
          >
            Manual
          </button>
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};
