import "../blocks/WeatherCard.css";
import Night from "../images/Night/Night.svg";
import NightCloudy from "../images/Night/Night-Cloudy.svg";
import NightRain from "../images/Night/Night-Rain.svg";
import NightStorm from "../images/Night/Night-Storm.svg";
import NightSnow from "../images/Night/Night-Snow.svg";
import NightFog from "../images/Night/Night-Fog.svg";

import Sunny from "../images/Sunny/Sunny.svg";
import SunnyCloudy from "../images/Sunny/Sunny-Cloudy.svg";
import SunnyRain from "../images/Sunny/Sunny-Rain.svg";
import SunnyStorm from "../images/Sunny/Sunny-Storm.svg";
import SunnySnow from "../images/Sunny/Sunny-Snow.svg";
import SunnyFog from "../images/Sunny/Sunny-Fog.svg";
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

        <img src={imageSrcUrl} className="weather_image" alt="weather"></img>
      </section>
    </>
  );
};

export default WeatherCard;
