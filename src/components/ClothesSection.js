import { useMemo } from "react";
import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

const ClothesSection = ({
  newGeneratedCards,
  currentTemp,
  weatherTemp,
  onSelectCard,
}) => {
  const newTemp = currentTemp;
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

  const filteredCards = newGeneratedCards.filter((item) => {
    return (
      item.weather && weatherType && item.weather.toLowerCase() === weatherType
    );
  });
  return (
    <div className="clothes__section-container">
      <div className="clothes__section-title">
        <p className="clothes__section-title_item">Your items</p>
        <p className="clothes__section-title_button" onClick={onSelectCard}>
          + Add new
        </p>
      </div>
      <div className="clothes__section-clothes_items">
        {newGeneratedCards
          .filter((item) => {
            return item.weather.toLowerCase() === weatherType;
          })
          .map((data) => (
            <ItemCard key={data.id} data={data} onSelectCard={onSelectCard} />
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
