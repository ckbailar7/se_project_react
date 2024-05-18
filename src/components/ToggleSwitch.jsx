import React from "react";
import { useState, useContext, useEffect } from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  // const [currentTemperatureUnitTTT, handleToggleSwitchChangeTTT] =
  //   useState("C");
  // const handleChange = () => {
  //   if (currentTemperatureUnitTTT === "C") handleToggleSwitchChangeTTT("F");
  //   if (currentTemperatureUnitTTT === "F") handleToggleSwitchChangeTTT("C");
  // };
  //console.log(currentTemperatureUnitTTT);

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  console.log(`currentTemperatureUnit`, currentTemperatureUnit);
  return (
    <label className="newLabel-switch">
      <input
        type="checkbox"
        className="newLabel-switch-box"
        onChange={handleToggleSwitchChange}
        //onClick={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "C"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-C  ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-F  ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
