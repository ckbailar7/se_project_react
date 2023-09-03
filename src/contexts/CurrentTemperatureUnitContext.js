import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  CurrentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

// export const currentTemperatureUnit = {
//   F: "",
//   C: "",
// };

export default CurrentTemperatureUnitContext;
