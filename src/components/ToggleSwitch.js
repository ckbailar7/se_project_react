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

import React from "react";
import "../blocks/Switch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = ({ isOn, handleToggle, onColor }) => {
  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={CurrentTemperatureUnitContext["F"]}
      >
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default ToggleSwitch;
