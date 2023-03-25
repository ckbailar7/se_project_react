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

const weatherOptions = [
  {
    url: Sunny,
    day: true,
    type: "Sunny",
  },
  {
    url: SunnyCloudy,
    day: true,
    type: "Sunny-Cloudy",
  },
  {
    url: SunnyRain,
    day: true,
    type: "Sunny-Rain",
  },
  {
    url: SunnyStorm,
    day: true,
    type: "Sunny-Storm",
  },
  {
    url: SunnySnow,
    day: true,
    type: "Sunny-Snow",
  },
  {
    url: SunnyFog,
    day: true,
    type: "Sunny-Fog",
  },
  {
    url: Night,
    day: false,
    type: "Night",
  },
  {
    url: NightCloudy,
    day: false,
    type: "Night-Cloudy",
  },
  {
    url: NightRain,
    day: false,
    type: "Night-Rain",
  },
  {
    url: NightStorm,
    day: false,
    type: "Night-Storm",
  },
  {
    url: NightSnow,
    day: false,
    type: "Night-Snow",
  },
  {
    url: NightFog,
    day: false,
    type: "Night-Fog",
  },
];

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  console.log("weather Card");
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imgSrc[0].url || "";
  return (
    <>
      <section className="weather" id="weather">
        <div className="weather_info">{weatherTemp}</div>

        <img src={imageSrcUrl} className="weather_image" alt="weather"></img>
      </section>
    </>
  );
};

export default WeatherCard;
