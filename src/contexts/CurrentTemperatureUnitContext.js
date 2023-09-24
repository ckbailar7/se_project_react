import React from "react";
import "../utils/api";
const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

// export const currentTemperatureUnit = {
//   F: "",
//   C: "",
// };

export { CurrentTemperatureUnitContext };
