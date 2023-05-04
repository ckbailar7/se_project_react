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

// import React from "react";
// import { useState, useContext, useEffect } from "react";
// // import "../blocks/Switch.css";
// import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

// const ToggleSwitch = (currentTemp) => {
//   const { CurrentTemperatureUnit, handleToggleSwitchChange } = useContext(
//     CurrentTemperatureUnitContext
//   );

//   const [isChecked, setIsChecked] = useState(CurrentTemperatureUnit === "C");
//   useEffect(
//     () => setIsChecked(CurrentTemperatureUnit === "C"),
//     [CurrentTemperatureUnit]
//   );
//   return (
//     <div className="toggle-switch">
//       <label className="toggle-switch__label">
//         <input
//           className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
//           type="checkbox"
//           name="toggle-switch-checkbox"
//           value={CurrentTemperatureUnit}
//           onChange={handleToggleSwitchChange}
//           checked={isChecked}
//         />
//         <span className="toggle-switch_checkbox toggle-switch__checkbox_state_visible" />
//       </label>
//     </div>
//   )

// export default ToggleSwitch;

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

// <div>
//   {/* <CurrentTemperatureUnitContext.Provider
//     value={CurrentTemperatureUnitContext["F"]}
//   > */}
//   <input
//     checked={isChecked}
//     onChange={handleToggleSwitchChange}
//     className="react-switch-checkbox"
//     id={`react-switch-new`}
//     type="checkbox"
//     name="react-switch-checkbox"
//     value={CurrentTemperatureUnit}
//   />
//   <label
//     // style={{ background: isOn && onColor }}
//     className="react-switch-label"
//     // htmlFor={`react-switch-new`}
//   >
//     <span className={`react-switch-button`} />
//   </label>
//   {/* </CurrentTemperatureUnitContext.Provider> */}
// </div>
//   );
// };

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

//Eventually delete after created reference

// import * as React from "react";

// const ToggleSwitch = () => {
//   const [checkedOne, setCheckedOne] = React.useState(false);
//   const [checkedTwo, setCheckedTwo] = React.useState(false);

//   const handleChangeOne = () => {
//     setCheckedOne(!checkedOne);
//   };

//   const handleChangeTwo = () => {
//     setCheckedTwo(!checkedTwo);
//   };

//   return (
//     <div>
//       <Checkbox label="Value 1" value={checkedOne} onChange={handleChangeOne} />
//       <Checkbox label="Value 2" value={checkedTwo} onChange={handleChangeTwo} />
//       <p>Is Value 1 Checked? {checkedOne.toString()}</p>
//       <p>Is Value 2 Checked? {checkedTwo.toString()}</p>
//     </div>
//   );
// };

// const Checkbox = ({ label, value, onChange }) => {
//   return (
//     <label>
//       <input type="checkbox" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };

// export default ToggleSwitch;

//   return (
//     <div className="toggle-switch">
//       <input
//         className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
//         type="checkbox"
//         name="toggle-switch-checkbox"
//         value={CurrentTemperatureUnit}
//         onChange={handleToggleSwitchChange}
//         checked={isChecked}
//       />
//       <label className="toggle-switch__label">
//         <span className="toggle-switch_checkbox toggle-switch__checkbox_state_visible" />
//       </label>
//     </div>
//   );
// };
