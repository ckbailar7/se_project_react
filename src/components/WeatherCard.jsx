import "../blocks/WeatherCard.css";

import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp, currentTemp }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });
  const imageSrcUrl = weatherOption.url || "";
  return (
    <>
      <section className="weather" id="weather">
        <div className="weather_info">
          {weatherTemp}°{currentTemperatureUnit}
        </div>

        <img
          src={{ imageSrcUrl }}
          className="weather_image"
          alt="weather"
        ></img>
      </section>
    </>
  );
};

export default WeatherCard;
