import React from "react";
import { useState, useContext, useEffect } from "react";
import "../blocks/Switch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = ({ isOn, handleToggle, onColor }) => {
  const { CurrentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(CurrentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(CurrentTemperatureUnit === "C"),
    [CurrentTemperatureUnit]
  );
  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={CurrentTemperatureUnitContext["F"]}
      >
        <label
          style={{ background: isOn && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <input
            checked={isChecked}
            // checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <span className={`react-switch-button`} />
        </label>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default ToggleSwitch;
