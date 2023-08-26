import React from "react";
import { useState, useContext, useEffect } from "react";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = ({ handleToggleSwitchChange }) => {
  const [currentTemperatureUnitTTT, handleToggleSwitchChangeTTT] =
    useState("C");
  const handleChange = () => {
    if (currentTemperatureUnitTTT === "C") handleToggleSwitchChangeTTT("F");
    if (currentTemperatureUnitTTT === "F") handleToggleSwitchChangeTTT("C");
  };
  //console.log(currentTemperatureUnitTTT);
  return (
    <label className="newLabel-switch">
      <input
        type="checkbox"
        className="newLabel-switch-box"
        onChange={handleChange}
        onClick={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnitTTT === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F  ${
          currentTemperatureUnitTTT === "F" && "switch__active"
        }`}
      >
        C
      </p>
      <p
        className={`switch__temp-C  ${
          currentTemperatureUnitTTT === "C" && "switch__active"
        }`}
      >
        F
      </p>
    </label>
  );
};

export default ToggleSwitch;
