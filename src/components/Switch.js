import React from "react";
import { useState, useContext, useEffect } from "react";
import "../blocks/Switch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const Switch = ({
  isOn,
  handleToggle,
  onColor,
  currentTemp,
  handleToggleSwitchChange,
}) => {
  return (
    <div>
      <input
        checked={isOn}
        onChange={handleToggleSwitchChange}
        onClick={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        F<span className={`react-switch-button`} />C
      </label>
    </div>
  );
};

export default Switch;
