import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/App.css";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";
import { defaultClothingItems } from "../utils/constants.js";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 82) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 81) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);
  //console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    //console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  //console.log(filteredCards);
  return (
    <main className="main">
      <WeatherCard day={true} type={"Sunny-Cloudy"} weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp}°F You may want to wear:
        <div className="card__items">
          {filteredCards.map((data) => (
            <ItemCard data={data} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
