import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/App.css";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";

import { useMemo, useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, currentTemp, newGeneratedCards }) {
  const checkWeatherTempDegreeFar = useMemo(() => {
    if (weatherTemp === "F") {
      //console.log(`checkWeatherTempDegreeFar .... ` + "true");
      return true;
    } else {
      console.log(`checkWeatherTempDegreeFar .... ` + "false");
      return false;
    }
  }, [weatherTemp]);

  //const newTemp = currentTemp?.[weatherTemp] || 999;

  const newTemp = currentTemp;
  const newCelTempTemp = (currentTemp - 32) * 0.556;
  console.log(`newCelTempTemp ... `, newCelTempTemp);
  const weatherType = useMemo(() => {
    if (
      (newTemp >= 82 && weatherTemp === "F") ||
      (newTemp >= 28 && weatherTemp === "C")
    ) {
      return "hot";
    } else if (
      (newTemp >= 66 && weatherTemp === "F") ||
      (newTemp >= 19 && weatherTemp === "C") ||
      (newTemp <= 81 && weatherTemp === "F") ||
      (newTemp <= 27 && weatherTemp === "C")
    ) {
      return "warm";
    } else if (
      (newTemp <= 65 && weatherTemp === "F") ||
      (newTemp <= 18 && weatherTemp === "C")
    ) {
      return "cold";
    }
  }, [newTemp]);

  //console.log(`New Generated Cards ... `, newGeneratedCards);

  const filteredCards = newGeneratedCards.filter((item) => {
    //console.log(item);

    return (
      item.weather && weatherType && item.weather.toLowerCase() === weatherType
    );
  });

  //console.log(`filteredCards`, filteredCards);
  //console.log("Hello from Main");
  //console.log(currentTemp);
  //console.log(filteredCards.map);
  console.log(`weatherTemp ...`, weatherTemp);
  return (
    <main id="0" className="main">
      <WeatherCard
        day={true}
        type={"Sunny-Cloudy"}
        weatherTemp={weatherTemp}
        currentTemp={newTemp}
      />
      <section className="card__section" id="card-section">
        Today is {newTemp}
        {weatherTemp} You may want to wear:
        <div className="card__items">
          {newGeneratedCards
            .filter((item) => {
              return item.weather.toLowerCase() === weatherType;
            })
            .map((data) => (
              <ItemCard
                key={data._id}
                data={data}
                onSelectCard={onSelectCard}
              />
            ))}
          {/* {filteredCards.map((data) => (
            <ItemCard key={data._id} data={data} onSelectCard={onSelectCard} />
          ))} */}
        </div>
      </section>
    </main>
  );
}

export default Main;
