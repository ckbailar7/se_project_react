import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/App.css";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";

import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  weatherTemp,
  onSelectCard,
  currentTemp,
  newGeneratedCards,
  onCardLike,
}) {
  //const [newGeneratedCards, setNewGeneratedCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  if (!Array.isArray(newGeneratedCards)) {
    console.error("newGeneratedCards is not an array:", newGeneratedCards);
    return null;
  }
  // const checkWeatherTempDegreeFar = useMemo(() => {

  //   if (weatherTemp === "F") {
  //     //console.log(`checkWeatherTempDegreeFar .... ` + "true");
  //     return true;
  //   } else {
  //     console.log(`checkWeatherTempDegreeFar .... ` + "false");
  //     return false;
  //   }
  // }, [weatherTemp]);

  //const newTemp = currentTemp?.[weatherTemp] || 999;

  // const newTemp = currentTemp;
  // const newCelTempTemp = (currentTemp - 32) * 0.556;
  //console.log(`newCelTempTemp ... `, newCelTempTemp);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  console.log(currentTemperatureUnit);

  const getWeatherType = () => {
    if (
      (temp >= 82 && currentTemperatureUnit === "F") ||
      (temp >= 28 && currentTemperatureUnit === "C")
    ) {
      return "hot";
    } else if (
      (temp >= 66 && currentTemperatureUnit === "F") ||
      (temp >= 19 && currentTemperatureUnit === "C") ||
      (temp <= 81 && currentTemperatureUnit === "F") ||
      (temp <= 27 && currentTemperatureUnit === "C")
    ) {
      return "warm";
    } else if (
      (temp <= 65 && currentTemperatureUnit === "F") ||
      (temp <= 18 && currentTemperatureUnit === "C")
    ) {
      return "cold";
    }
  };

  // const getWeatherType = () => {
  //   if (temp >= 86 || temp >= 28) {
  //     return "hot";
  //   } else if ((temp >= 66 && temp <= 81) || (temp >= 19 && temp <= 27)) {
  //     return "warm";
  //   } else if (temp <= 65 || temp <= 18) {
  //     return "cold";
  //   }
  // };

  //Revision for weatherType without memoization
  // const getWeatherType = () => {
  //   if (
  //     (newTemp >= 82 && weatherTemp === "F") ||
  //     (newTemp >= 28 && weatherTemp === "C")
  //   ) {
  //     return "hot";
  //   } else if (
  //     (newTemp >= 66 && weatherTemp === "F") ||
  //     (newTemp >= 19 && weatherTemp === "C") ||
  //     (newTemp <= 81 && weatherTemp === "F") ||
  //     (newTemp <= 27 && weatherTemp === "C")
  //   ) {
  //     return "warm";
  //   } else if (
  //     (newTemp <= 65 && weatherTemp === "F") ||
  //     (newTemp <= 18 && weatherTemp === "C")
  //   ) {
  //     return "cold";
  //   }
  // };

  const weatherType = getWeatherType();
  // const weatherType = useMemo(() => {
  //   if (
  //     (newTemp >= 82 && weatherTemp === "F") ||
  //     (newTemp >= 28 && weatherTemp === "C")
  //   ) {
  //     return "hot";
  //   } else if (
  //     (newTemp >= 66 && weatherTemp === "F") ||
  //     (newTemp >= 19 && weatherTemp === "C") ||
  //     (newTemp <= 81 && weatherTemp === "F") ||
  //     (newTemp <= 27 && weatherTemp === "C")
  //   ) {
  //     return "warm";
  //   } else if (
  //     (newTemp <= 65 && weatherTemp === "F") ||
  //     (newTemp <= 18 && weatherTemp === "C")
  //   ) {
  //     return "cold";
  //   }
  // }, [newTemp]);

  //console.log(`New Generated Cards ... `, newGeneratedCards);

  // const filteredCards = newGeneratedCards.filter((item) => {
  //   //console.log(item);

  //   return (
  //     item.weather && weatherType && item.weather.toLowerCase() === weatherType
  //   );
  // });

  //console.log(`filteredCards`, filteredCards);
  //console.log("Hello from Main");
  //console.log(currentTemp);
  //console.log(filteredCards.map);
  // console.log(`weatherTemp ...`, weatherTemp);
  return (
    <main id="0" className="main">
      <WeatherCard
        day={true}
        type={"Sunny-Cloudy"}
        weatherTemp={temp}
        //currentTemp={newTemp}
      />
      <section className="card__section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} You may want to wear:
        <div className="card__items">
          {newGeneratedCards
            .filter((item) => {
              return item.weather && item.weather.toLowerCase() === weatherType;
            })
            .map((data) => (
              <ItemCard
                key={data._id}
                data={data}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
                currentUser={currentUser}
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
