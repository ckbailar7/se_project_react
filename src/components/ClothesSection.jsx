import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const ClothesSection = ({
  newGeneratedCards,
  currentTemp,
  weatherTemp,
  onSelectCard,
  onCreateModal,
  currentUser,
  onCardLike,
  //currentTemperatureUnit,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = currentTemp?.temperature?.[currentTemperatureUnit] || 999;
  // const getWeatherType = () => {
  //   if (
  //     (temp >= 82 && currentTemperatureUnit === "F") ||
  //     (temp >= 28 && currentTemperatureUnit === "C")
  //   ) {
  //     return "hot";
  //   } else if (
  //     (temp >= 66 && currentTemperatureUnit === "F") ||
  //     (temp >= 19 && currentTemperatureUnit === "C") ||
  //     (temp <= 81 && currentTemperatureUnit === "F") ||
  //     (temp <= 27 && currentTemperatureUnit === "C")
  //   ) {
  //     return "warm";
  //   } else if (
  //     (temp <= 65 && currentTemperatureUnit === "F") ||
  //     (temp <= 18 && currentTemperatureUnit === "C")
  //   ) {
  //     return "cold";
  //   }
  // };

  //const weatherType = getWeatherType();

  const isOwn = newGeneratedCards.owner === currentUser._id;

  const profileOwnedClothingItemsClassName = `clothes__section-clothes_items ${
    isOwn
      ? "clothes__section-clothes_items_visible"
      : "clothes__section-clothes_items_hidden"
  }`;

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

  // const filteredCards = newGeneratedCards.filter((item) => {
  //   return (
  //     item.weather && weatherType && item.weather.toLowerCase() === weatherType
  //   );
  // });
  return (
    <div className="clothes__section-container">
      <div className="clothes__section-title">
        <p className="clothes__section-title_item">Your items</p>
        <p className="clothes__section-title_button" onClick={onCreateModal}>
          + Add new
        </p>
      </div>
      <div className="clothes__section-clothes_items">
        {newGeneratedCards
          .filter((item) => {
            return item.weather && item.weather.toLowerCase();
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
      </div>
    </div>
  );
};

{
  /* <section className="card__section" id="card-section">
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
          ))} */
}
// </div>
// </section> */}

export default ClothesSection;
