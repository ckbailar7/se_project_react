import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/App.css";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";
import { defaultClothingItems } from "../utils/constants.js";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard, currentTemp, weatherData }) {
  const weatherType = useMemo(() => {
    if (currentTemp >= 82) {
      return "hot";
    } else if (currentTemp >= 66 && currentTemp <= 81) {
      return "warm";
    } else if (currentTemp <= 65) {
      return "cold";
    }
  }, [currentTemp]);
  console.log(weatherType);
  console.log(weatherTemp);
  console.log(currentTemp);
  console.log(weatherData);

  const filteredCards = defaultClothingItems.filter((item) => {
    //console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);
  //console.log("Hello from Main");
  //console.log(currentTemp);
  //console.log(filteredCards.map);

  return (
    <main id="0" className="main">
      <WeatherCard
        day={true}
        type={"Sunny-Cloudy"}
        weatherTemp={weatherTemp}
        currentTemp={currentTemp}
      />
      <section className="card__section" id="card-section">
        Today is {currentTemp} You may want to wear:
        <div className="card__items">
          {filteredCards.map((data) => (
            <ItemCard key={data._id} data={data} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
