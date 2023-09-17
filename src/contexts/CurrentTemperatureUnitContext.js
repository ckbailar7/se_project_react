import React from "react";
import "../utils/api";
const CurrentTemperatureUnitContext = React.createContext({
  CurrentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

// export const currentTemperatureUnit = {
//   F: "",
//   C: "",
// };

export default CurrentTemperatureUnitContext;
