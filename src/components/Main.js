import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/App.css";
import "../blocks/ItemCard.css";
import { defaultClothingItems } from "../utils/constants.js";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={true} type={"Sunny-Storm"} weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((data) => (
            //console.log(data);
            <ItemCard data={data} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
