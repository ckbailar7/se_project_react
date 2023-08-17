// import React from "react";
// import { useState, useContext, useEffect } from "react";
// import "../blocks/Switch.css";
// import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

// const ToggleSwitch = ({ isOn, handleToggle, onColor }) => {
//   const { CurrentTemperatureUnit, handleToggleSwitchChange } = useContext(
//     CurrentTemperatureUnitContext
//   );

//   const [isChecked, setIsChecked] = useState(CurrentTemperatureUnit === "C");
//   useEffect(
//     () => setIsChecked(CurrentTemperatureUnit === "C"),
//     [CurrentTemperatureUnit]
//   );
//   return (
//     <div>
//       <CurrentTemperatureUnitContext.Provider
//         value={CurrentTemperatureUnitContext["F"]}
//       >
//         <label
//           style={{ background: isOn && onColor }}
//           className="react-switch-label"
//           htmlFor={`react-switch-new`}
//         >
//           <input
//             checked={isChecked}
//             // checked={isOn}
//             onChange={handleToggle}
//             className="react-switch-checkbox"
//             id={`react-switch-new`}
//             type="checkbox"
//           />
//           <span className={`react-switch-button`} />
//         </label>
//       </CurrentTemperatureUnitContext.Provider>
//     </div>
//   );
// };

// export default ToggleSwitch;
import React from "react";
import { useState, useContext, useEffect } from "react";
//import "../blocks/Switch.css";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = ({
  isOn,
  handleToggle,
  onColor,
  currentTemp,
  handleToggleSwitchChange,
}) => {
  const [currentTemperatureUnitTTT, handleToggleSwitchChangeTTT] =
    useState("C");
  const handleChange = () => {
    if (currentTemperatureUnitTTT === "C") handleToggleSwitchChangeTTT("F");
    if (currentTemperatureUnitTTT === "F") handleToggleSwitchChangeTTT("C");
  };
  console.log(currentTemperatureUnitTTT);
  return (
    //   <div className="react-switch-container">
    //     <input
    //       checked={isOn}
    //       onChange={handleToggleSwitchChange}
    //       onClick={handleToggle}
    //       className="react-switch-checkbox"
    //       id={`react-switch-new`}
    //       type="checkbox"
    //     />
    //     <label
    //       style={{ background: isOn && onColor }}
    //       className="react-switch-label"
    //       htmlFor={`react-switch-new`}
    //     >
    //       F<span className={`react-switch-button`} />C
    //     </label>
    //   </div>
    // );
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
