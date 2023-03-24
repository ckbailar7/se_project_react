import SunnyImage from "../images/Sunny/Sunny.svg";
import "../blocks/WeatherCard.css";

const weatherOptions = [
  {
    url: "../images/Sunny/Sunny.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Sunny/Sunny-Cloudy.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Sunny/Sunny-Rain.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Sunny/Sunny-Storm.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Sunny/Sunny-Snow.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Sunny/Sunny-Fog.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Night/Night.svg",
    day: true,
    type: "Night",
  },
  {
    url: "../images/Night/Night-Cloudy.svg",
    day: true,
    type: "Night",
  },
  {
    url: "../images/Night/Night-Rain.svg",
    day: true,
    type: "Night",
  },
  {
    url: "../images/Night/Night-Storm.svg",
    day: true,
    type: "Night",
  },
  {
    url: "../images/Night/Night-Snow.svg",
    day: true,
    type: "Night",
  },
  {
    url: "../images/Night/Sunny-Fog.svg",
    day: true,
    type: "sunny",
  },
];

function WeatherCard() {
  return (
    <>
      <section className="weather" id="weather">
        <div className="weather_info">65F</div>

        <img src={SunnyImage} className="weather_image"></img>
      </section>
      <section id="card-section">CardSection</section>
    </>
  );
}

export default WeatherCard;
